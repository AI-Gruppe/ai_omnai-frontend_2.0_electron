import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph',
  imports: [CommonModule],
  template: `
    <div class="size-full border border-blue-500">
      <svg #plotlyContainer class="size-full"></svg>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
      }
    `,
    `
      .size-full {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit {
  dataSeries = input.required<Record<string, { timestamp: number; value: number }[]>>();

  plotContainer = viewChild.required<ElementRef>('plotlyContainer');

  width = signal(600);
  height = signal(400);

  lastData: Record<string, { timestamp: number; value: number }[]> | undefined;

  // Helper function for downsampling
  private downsample(points: { timestamp: number; value: number }[], n: number) {
    return points.filter((_, i) => i % n === 0);
  }

  // Computed Signals for scales
  xScale = computed(() => {
    if (!this.xScaleCache || this.xScaleCache.data !== this.dataSeries()) {
      const allTimestamps = Object.values(this.dataSeries()).flat().map(d => d.timestamp);
      this.xScaleCache = {
        data: this.dataSeries(),
        scale: d3.scaleTime()
          .domain(d3.extent(allTimestamps) as [number, number])
          .range([0, this.width()])
      };
    }
    return this.xScaleCache.scale;
  });
  private xScaleCache: { data: any; scale: d3.ScaleTime<number, number> } | undefined;

  yScale = computed(() => {
    if (!this.yScaleCache || this.yScaleCache.data !== this.dataSeries()) {
      const allValues = Object.values(this.dataSeries()).flat().map(d => d.value);
      this.yScaleCache = {
        data: this.dataSeries(),
        scale: d3.scaleLinear()
          .domain([0, d3.max(allValues) || 0])
          .range([this.height(), 0])
      };
    }
    return this.yScaleCache.scale;
  });
  private yScaleCache: { data: any; scale: d3.ScaleLinear<number, number> } | undefined;

  // Computed Signal for line
  line = computed(() => {
    return d3.line<{ timestamp: number; value: number }>()
      .x(d => this.xScale()(d.timestamp))
      .y(d => this.yScale()(d.value));
  });

  updateGraph = effect(() => {
    const currentData = this.dataSeries();
    if (this.lastData !== currentData) {
      this.initializeOrUpdateGraph();
      this.lastData = currentData;
    }
  });

  ngOnInit(): void {
    // Ensure the effect runs at least once after initialization
    this.dataSeries(); // Trigger the effect by accessing the input
  }

  initializeOrUpdateGraph() {
    const svg = d3.select(this.plotContainer().nativeElement);

    // Clear existing content
    svg.selectAll("*").remove();

    // Set up SVG dimensions
    svg.attr('width', this.width())
       .attr('height', this.height());

    // Add axes
    svg.append('g')
       .attr('transform', `translate(0,${this.height()})`)
       .call(d3.axisBottom(this.xScale()));

    svg.append('g')
       .call(d3.axisLeft(this.yScale()));

    // Plot each series with downsampling
    const downsampleFactor = 1;  // Adjust this based on your data size and performance needs
    const dataEntries = Object.entries(this.dataSeries());
    const allPaths = svg.selectAll('path')
      .data(dataEntries.map(([_, points]) => this.downsample(points, downsampleFactor)))
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', this.line());
  }
}
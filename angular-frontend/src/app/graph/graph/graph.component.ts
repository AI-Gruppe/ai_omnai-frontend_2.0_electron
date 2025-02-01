import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { newPlot, react } from 'plotly.js-basic-dist-min';

@Component({
  selector: 'app-graph',
  imports: [CommonModule],
  template: `<div class="size-full border border-blue-500">
    <div #plotlyContainer class="size-full"></div>
  </div> `,
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
      .graph-container {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  dataSeries =
    input.required<Record<string, { timestamp: number; value: number }[]>>();

  plotContainer = viewChild.required<ElementRef>('plotlyContainer');

  updatGraph = effect(() => {
    const data = this.dataSeries();
    this.updateGraph();
  });
  ngAfterViewInit(): void {
    this.initializeGraph();
  }

  initializeGraph() {
    const element = this.plotContainer().nativeElement;

    newPlot(this.plotContainer().nativeElement, [], {
      title: 'Oszillogramm',
      xaxis: { title: 'Zeit (ms)' },
      yaxis: { title: 'Wert' },
      showlegend: true,
    }, {
      responsive: true
    });
  }

  updateGraph() {
    const traces = Object.entries(this.dataSeries()).map(([uuid, points]) => ({
      x: points.map((p) => p.timestamp),
      y: points.map((p) => p.value),
      mode: 'lines',
      name: uuid,
    }));

    react(this.plotContainer().nativeElement, traces);
  }
}

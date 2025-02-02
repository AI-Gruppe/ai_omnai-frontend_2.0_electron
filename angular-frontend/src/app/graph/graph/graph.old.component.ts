import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  linkedSignal,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import {
  Data,
  Datum,
  newPlot,
  PlotData,
  react,
} from 'plotly.js-basic-dist-min';

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

  traces: Signal<Data[]> = linkedSignal({
    source: this.dataSeries,
    computation: (currentDataSeries, previous) => {
      const newTraces: Data[] = [];
      console.time("start transform")
      for (const [uuid, points] of Object.entries(currentDataSeries)) {
        const lastTrace = (previous?.value as PlotData[] | undefined)?.find(
          (trace) => trace.name === uuid,
        ) || { x: [], y: [], mode: 'lines', name: uuid, type: 'scatter' };
        const newPoints = points.slice(lastTrace.x.length);

        newTraces.push({
          ...lastTrace,
          mode: 'lines',
          x: [
            ...(lastTrace.x as Datum[]),
            ...newPoints.map((p) => p.timestamp),
          ],
          y: [...(lastTrace.y as Datum[]), ...newPoints.map((p) => p.value)],
        });
      }
      console.timeEnd("start transform")
      return newTraces as Data[];
    },
  });

  updatGraph = effect(() => {
    const data = this.dataSeries();
    this.updateGraph();
  });
  ngAfterViewInit(): void {
    this.initializeGraph();
  }

  initializeGraph() {
    const element = this.plotContainer().nativeElement;

    newPlot(
      this.plotContainer().nativeElement,
      [],
      {
        title: 'Oszillogramm',
        xaxis: { title: 'Zeit (ms)' },
        yaxis: { title: 'Wert' },
        showlegend: true,
      },
      {
        responsive: true,
      },
    );
  }

  updateGraph() {
    console.time("draw");
    react(this.plotContainer().nativeElement, this.traces());
    console.timeEnd("draw")
  }
}

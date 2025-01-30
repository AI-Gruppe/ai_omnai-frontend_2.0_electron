import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-graph',
  imports: [CommonModule],
  templateUrl: `./graph.component.html`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  dataSeries =
    input.required<Record<string, { timestamp: number; value: number }[]>>();

  plotContainer = viewChild.required<ElementRef>('plotlyContainer');
  updatGraph = effect(() => {const data = this.dataSeries();  this.updateGraph()});
  ngAfterViewInit(): void {
    this.initializeGraph();
  }

  initializeGraph() {
    Plotly.newPlot(this.plotContainer().nativeElement, [], {
      title: 'Oszillogramm',
      xaxis: { title: 'Zeit (ms)' },
      yaxis: { title: 'Wert' },
      showlegend: true,
    });
  }

  updateGraph() {
    const traces = Object.entries(this.dataSeries()).map(([uuid, points]) => ({
      x: points.map((p) => p.timestamp),
      y: points.map((p) => p.value),
      mode: 'lines',
      name: uuid,
    }));

    Plotly.react(this.plotContainer().nativeElement, traces);
  }
}

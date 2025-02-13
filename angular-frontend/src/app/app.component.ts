import { Component } from '@angular/core';
import { DeviceSelectionComponent } from './device-handling/device-selection/device-selection.component';
import { GraphComponent } from './graph/graph/graph.component';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DeviceSelectionComponent, GraphComponent, KeyValuePipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'omnAI View';
}

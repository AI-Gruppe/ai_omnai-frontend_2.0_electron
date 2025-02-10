import { Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServerDescription } from '../../device-handling/data-service/omnAIServer';

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [MatCheckboxModule],
  template: `
    <div class="flex flex-col size-full">
      <h2 class="text-xl font-bold text-center">{{ server().serverURL }}</h2>

      <div class="device-list w-full mt-4">
        @for (device of server().devices(); track device) {
          <div class="flex items-center gap-2 p-2">
            <mat-checkbox
              [checked]="server().selectedDevices()[device.UUID]"
              (change)="toggleDeviceSelection(device.UUID)">
              {{ device.UUID }}
            </mat-checkbox>
          </div>
        }
      </div>
    </div>
  `,
})
export class ServerCardComponent {
  server = input.required<ServerDescription>();

  toggleDeviceSelection(uuid: string) {
    this.server().toggleSelectStateOfDevice(uuid);
  }
}

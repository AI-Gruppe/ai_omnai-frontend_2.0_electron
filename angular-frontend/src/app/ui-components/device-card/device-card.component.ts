import { Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ServerDescription } from '../../device-handling/data-service/omnAIServer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  template: `
    <div
      class="flex flex-col size-full bg-omni-schwarz-700 min-h-[30vh] rounded-md p-4 shadow-xl">
      <!-- Header mit Server URL und Connect/Disconnect Button -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-center text-omni-schwarz-100 p-2">
          {{ server().serverURL }}
        </h2>
        <button
          [ngClass]="{
            'text-green-500':
              !server().isConnected() && server().numSelectedDevices() > 0,
            'text-red-500': server().isConnected(),
            'text-gray-500':
              !server().isConnected() && server().numSelectedDevices() === 0,
          }"
          class="px-4 py-2 rounded-md flex items-center cursor-pointer"
          (click)="
            server().isConnected() ? server().disconnect() : server().connect()
          "
          [disabled]="
            !server().isConnected() && server().numSelectedDevices() === 0
          ">
          <span class="material-symbols-outlined text-4xl ">
            {{ server().isConnected() ? 'stop_circle' : 'play_circle' }}
          </span>
        </button>
      </div>

      <!-- Globaler Toggle für alle Geräte -->
      <div class="flex items-center gap-8 p-2 pl-4 border-b border-gray-500">
        <input
          type="checkbox"
          (change)="toggleAllDevices($event)"
          class="h-5 w-5 border-2 rounded cursor-pointer bg-white checked:bg-blue-500 checked:border-blue-600" />
        <span class="text-lg text-omni-schwarz-100">Devices</span>
      </div>

      <!-- Liste der Geräte -->
      @for (device of server().devices(); track device) {
        <div class="flex items-center gap-8 p-4 rounded-lg">
          <input
            type="checkbox"
            [checked]="server().selectedDevices()[device.UUID]"
            (change)="toggleDeviceSelection(device.UUID)"
            [disabled]="server().isConnected()"
            [style.backgroundColor]="
              server().selectedDevices()[device.UUID]
                ? 'rgb(' +
                  device.color.r +
                  ',' +
                  device.color.g +
                  ',' +
                  device.color.b +
                  ')'
                : 'white'
            "
            [style.borderColor]="
              'rgb(' +
              device.color.r +
              ',' +
              device.color.g +
              ',' +
              device.color.b +
              ')'
            "
            class="h-5 w-5 border-2 rounded appearance-none cursor-pointer 
             flex items-center justify-center checked:before:content-['✔'] 
             checked:before:text-white checked:before:font-bold" />

          <span
            [style.color]="
              'rgb(' +
              device.color.r +
              ',' +
              device.color.g +
              ',' +
              device.color.b +
              ')'
            "
            class="font-bold">
            {{ device.UUID }}
          </span>
        </div>
      }
    </div>
  `,
})
export class ServerCardComponent {
  server = input.required<ServerDescription>();

  toggleDeviceSelection(uuid: string) {
    this.server().toggleSelectStateOfDevice(uuid);
  }

  toggleAllDevices(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
  }
}

import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../device-handling/data-service/data.service';
import { ServerCardComponent } from '../device-card/device-card.component';

@Component({
  selector: 'app-device-overview',
  standalone: true,
  imports: [NgFor, NgIf, ServerCardComponent],
  template: `
    <div
      class="grid gap-4 p-4 h-full
                grid-cols-1 
                md:grid-cols-3 
                lg:grid-cols-4">
      <ng-container *ngIf="serversKeys.length; else noServers">
        <app-server-card
          *ngFor="let serverKey of serversKeys"
          [server]="servers[serverKey]"
          class="flex h-[75%]">
        </app-server-card>
      </ng-container>

      <ng-template #noServers>
        <p class="text-gray-500 text-center w-full">Keine Server verfügbar</p>
      </ng-template>
    </div>
  `,
})
export class DeviceOverviewComponent {
  private readonly dataService = inject(DataService);
  servers = this.dataService.servers();
  serversKeys = Object.keys(this.servers);
}

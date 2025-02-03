import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DataService } from '../data-service/data.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-device-selection',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule, MatCheckboxModule],
  templateUrl: './device-selection.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceSelectionComponent {
  dataService = inject(DataService);
  selectedUUIDs = signal<Set<string>>(new Set());

  toggleDeviceSelection(uuid: string) {
    this.selectedUUIDs.update((selected) => {
      const updatedSet = new Set(selected);
      if (updatedSet.has(uuid)) {
        updatedSet.delete(uuid);
      } else {
        updatedSet.add(uuid);
      }
      return updatedSet;
    });
  }
}

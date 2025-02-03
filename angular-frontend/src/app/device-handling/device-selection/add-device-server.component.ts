import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-device-server',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="m-8 flex flex-col justify-evenly">
      <h1 class="text-xl font-bold mb-4">Neuen Server hinzufügen</h1>
      <div class="mb-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Server URL
        </label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-omni-red-500 focus:border-omni-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-omni-red-500 dark:focus:border-omni-red-500"
          [ngModel]="serverUrl()"
          (ngModelChange)="serverUrl.set($event)"
          placeholder="127.0.0.1:8080" />
      </div>
      <div class="flex justify-end gap-4">
        <button
          class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-omni-red-700 focus:z-10 focus:ring-2 focus:ring-omni-red-700 focus:text-omni-red-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          (click)="onNoClick()">
          Abbrechen
        </button>
        <button
          class="py-2 px-4 text-sm font-medium text-white bg-omni-red-700 rounded-lg hover:bg-omni-red-800 focus:ring-4 focus:ring-omni-red-300 dark:bg-omni-red-600 dark:hover:bg-omni-red-700 focus:outline-none dark:focus:ring-omni-red-800"
          (click)="returnServerAddress()"
          cdkFocusInitial>
          Hinzufügen
        </button>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDeviceServerComponent {
  serverUrl = signal<string>('127.0.0.1:8080');

  constructor(
    public dialogRef: MatDialogRef<AddDeviceServerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  returnServerAddress() {
    this.dialogRef.close(this.serverUrl());
  }
}

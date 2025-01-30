import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-page',
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
    ],
    template: `
    <div class="flex flex-col items-center p-6 space-y-6 max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-center text-blue-600">
        OmnAI Electron App
      </h1>

      <mat-card class="w-full shadow-lg p-6 space-y-4">
        <div class="flex flex-col space-y-4">
          <button
            mat-raised-button
            color="primary"
            (click)="openConnection()"
            [disabled]="isConnecting"
          >
            Verbindung suchen
          </button>

          <button
            mat-raised-button
            color="accent"
            (click)="searchDevices()"
            [disabled]="!isConnected"
          >
            Geräte suchen
          </button>

          <button
            mat-raised-button
            color="warn"
            (click)="startDevice()"
            [disabled]="!deviceUUID"
          >
            Daten abfragen
          </button>

          <button
            mat-raised-button
            (click)="closeConnection()"
            [disabled]="!isConnected"
          >
            Verbindung beenden
          </button>
        </div>
      </mat-card>

      <mat-card class="w-full shadow-lg p-6">
        <p *ngIf="deviceUUID" class="text-lg font-semibold text-green-600">
          Gefundene UUID: {{ deviceUUID }}
        </p>
      </mat-card>

      <mat-card class="w-full shadow-lg p-6">
        <mat-form-field class="w-full">
          <textarea
            matInput
            readonly
            rows="10"
            [value]="
              outputMessages.join(
                '
'
              )
            "
          ></textarea>
        </mat-form-field>
      </mat-card>

      <mat-progress-spinner
        *ngIf="isConnecting"
        mode="indeterminate"
      ></mat-progress-spinner>
    </div>
  `,
    styles: [
        `
      mat-form-field {
        width: 100%;
      }
    `,
    ]
})
export class MainPageComponent implements OnInit, AfterViewInit {
  isConnected = signal(false);
  isConnecting = signal(false);
  deviceUUID: string | null = null;
  outputMessages: string[] = [];
  socket: WebSocket | null = null;

  logMessage(message: string) {
    this.outputMessages.push(message);
  }

  openConnection(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.logMessage('WebSocket ist bereits verbunden.');
      return;
    }

    this.isConnecting.set(true);

    if ((window as any).omnai?.startBackend) {
      (window as any).omnai.startBackend().then(() => {
        this.logMessage('WebSocket-Server wird gestartet...');
      });
    }

    this.socket = new WebSocket('ws://127.0.0.1:8080/ws');

    this.socket.addEventListener('open', () => {
      this.logMessage('WebSocket verbunden!');
      this.isConnected.set(true);
      this.isConnecting.set(false);
    });

    this.socket.addEventListener('message', (event) => {
      this.logMessage(`Nachricht vom Server: ${event.data}`);
    });

    this.socket.addEventListener('close', () => {
      this.logMessage('WebSocket Verbindung geschlossen.');
      this.isConnected.set(false);
      this.isConnecting.set(false);
    });

    this.socket.addEventListener('error', (error) => {
      this.logMessage(`WebSocket Fehler: ${error}`);
      this.isConnecting.set(false);
    });
  }

  searchDevices(): void {
    if ((window as any).omnai?.sendCommand) {
      (window as any).omnai.sendCommand(['-s']);
      this.logMessage('Suche nach Geräten...');
    }
  }

  startDevice(): void {
    if (!this.deviceUUID) {
      this.logMessage('Keine UUID gefunden. Bitte zuerst Geräte suchen.');
      return;
    }

    if ((window as any).omnai?.sendCommand) {
      (window as any).omnai.sendCommand(['-d', this.deviceUUID]);
      this.logMessage(
        `Gerätedaten für UUID ${this.deviceUUID} werden abgerufen...`
      );
    }
  }

  closeConnection(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
      this.logMessage('Schließe WebSocket-Verbindung...');
    } else {
      this.logMessage('WebSocket ist bereits geschlossen.');
    }
  }

  ngAfterViewInit(): void {
    if ((window as any).omnai) {
      (window as any).omnai.onOutput((data: string) => {
        this.logMessage(`Ausgabe: ${data}`);

        const uuidMatch = data.match(/Device:\s+([A-F0-9]+)/i);
        if (uuidMatch) {
          this.deviceUUID = uuidMatch[1];
          this.logMessage(`Gefundene UUID: ${this.deviceUUID}`);
        }
      });

      (window as any).omnai.onError((error: string) => {
        this.logMessage(`Fehler: ${error}`);
      });

      (window as any).omnai.onClosed((message: string) => {
        this.logMessage(message);
      });
    }
  }

  ngOnInit(): void {}
}

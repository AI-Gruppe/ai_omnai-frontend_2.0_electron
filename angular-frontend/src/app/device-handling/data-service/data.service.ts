import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { DeviceOverview, messageTypeguards } from './message.typeguards';
import { tap } from 'rxjs';

interface DataFormat {
  timestamp: number;
  value: number;
}

interface DeviceInformation { UUID: string; color: { r: number; g: number; b: number } };

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly serverULR = "127.0.0.1:8080"
  readonly #wsURL = `ws://${this.serverULR}/ws`;
  private socket: WebSocket | null = null;
  isConnected = signal(false);
  devices = signal<
    DeviceInformation[]
  >([]);
  loadingDevices = signal<boolean>(false);

  data = signal<Record<string, DataFormat[]>>({});

  httpClient = inject(HttpClient);
  connect(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log('WebSocket ist bereits verbunden.');
      return;
    }

    console.log(`Verbinde mit WebSocket: ${this.#wsURL}`);
    this.socket = new WebSocket(this.#wsURL);

    this.socket.addEventListener('open', () => {
      console.log('WebSocket Verbindung hergestellt.');
      this.isConnected.set(true);
    });

    this.socket.addEventListener('message', (event) => {
      let parsedMessage: unknown;
      try {
        parsedMessage = JSON.parse(event.data);
      } catch {
        parsedMessage = event.data;
      }

      if (messageTypeguards.isOmnAIDataMessage(parsedMessage)) {
        this.data.update((records) => {
          parsedMessage.devices.forEach((uuid, index) => {
            const deviceData = records[uuid] ?? [];
            if (parsedMessage.data[index]) {
              deviceData.push({
                timestamp: parsedMessage.data[index].timestamp,
                value: parsedMessage.data[index].value[index] ?? 0,
              });
            }

            records[uuid] = deviceData;
          });

          return structuredClone(records);
        });
      } else {
        console.warn('Unbekanntes Nachrichtenformat:', parsedMessage);
      }
    });

    this.socket.addEventListener('close', () => {
      console.log('WebSocket Verbindung geschlossen.');
      this.isConnected.set(false);
      this.socket = null;
    });

    this.socket.addEventListener('error', (error) => {
      console.error('WebSocket Fehler:', error);
    });
  }

  disconnect(): void {
    if (this.socket) {
      console.log('Schließe WebSocket Verbindung...');
      this.socket.close();
    } else {
      console.log('Keine aktive WebSocket Verbindung.');
    }
  }

  requestDataFromDeviceUUIDs(deviceUUIDS: string[] | null) {
    if (!this.isConnected() || !this.socket) {
      this.connect();
    }

    const message =
      deviceUUIDS === null
        ? this.devices()
            .map((device) => device.UUID)
            .join(' ')
        : deviceUUIDS.join(' ');

    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      return;
    }

    this.socket?.addEventListener(
      'open',
      () => {
        console.log('WebSocket jetzt geöffnet, sende Nachricht:', message);
        this.socket?.send(message);
      },
      { once: true },
    );
  }

  getUUIDs() {
    this.loadingDevices.set(true);

    this.httpClient
      .get<DeviceOverview>(`http://${this.serverULR}/UUID`)
      .pipe(tap(() => this.loadingDevices.set(false)))
      .subscribe({
        next: this.#updateDevicesFromBackendResponse.bind(this),
        error: (err) => {
          console.error('Fehler beim Abrufen der UUIDs:', err);
        },
      });
  }

  #updateDevicesFromBackendResponse(data: DeviceOverview) {
    if (!data.devices || !data.colors) {
      return;
    }

    const mappedDevices = data.devices.map((device, index) => ({
      UUID: device.UUID,
      color: data.colors[index]?.color ?? { r: 0, g: 0, b: 0 }, // Falls keine Farbe vorhanden ist, Standardfarbe setzen
    }));

    console.log('mappedDevices', mappedDevices);
    this.devices.set(mappedDevices);
    this.loadingDevices.set(false);
  }
}

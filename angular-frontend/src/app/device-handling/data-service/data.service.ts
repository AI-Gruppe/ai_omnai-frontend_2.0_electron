import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

interface DeviceOverview {
  devices: {
    UUID: string;
  }[];
  colors: {
    color: { r: number; g: number; b: number };
  }[];
}

interface DataFormat {
  timestamp: number;
  value: number;
}

type wsMessageFormats =
  | string
  | {
      devices: string[];
      data: {
        timestamp: number;
        value: number[];
      }[];
    };

function isStringMessage(message: unknown): message is string {
  return typeof message === 'string';
}

function isOmnAIDataMessage(message: unknown): message is {
  devices: string[];
  data: { timestamp: number; value: number[] }[];
} {
  if (typeof message !== 'object' || message === null) return false;

  const msg = message as any;

  if (
    !Array.isArray(msg.devices) ||
    !msg.devices.every((d: any) => typeof d === 'string')
  ) {
    return false;
  }

  if (
    !Array.isArray(msg.data) ||
    !msg.data.every(
      (entry: any) =>
        typeof entry.timestamp === 'number' &&
        Array.isArray(entry.value) &&
        entry.value.every((v: any) => typeof v === 'number'),
    )
  ) {
    return false;
  }

  return true;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly #wsURL = 'ws://192.168.178.97:8080/ws';
  private socket: WebSocket | null = null;
  isConnected = signal(false);
  devices = signal<
    { UUID: string; color: { r: number; g: number; b: number } }[]
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

      if (isOmnAIDataMessage(parsedMessage)) {
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
      .get<DeviceOverview>('http://192.168.178.97:8080/UUID')
      .subscribe({
        next: (data) => {
          if (!data.devices || !data.colors) {
            console.error('Fehlerhafte Antwortstruktur:', data);
            this.loadingDevices.set(false);
            return;
          }

          const mappedDevices = data.devices.map((device, index) => ({
            UUID: device.UUID,
            color: data.colors[index]?.color ?? { r: 0, g: 0, b: 0 }, // Falls keine Farbe vorhanden ist, Standardfarbe setzen
          }));

          console.log('mappedDevices', mappedDevices);
          this.devices.set(mappedDevices);
          this.loadingDevices.set(false);
        },
        error: (err) => {
          this.loadingDevices.set(false);
          console.error('Fehler beim Abrufen der UUIDs:', err);
        },
      });
  }
}

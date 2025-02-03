import { HttpClient } from '@angular/common/http';
import { signal, computed, linkedSignal } from '@angular/core';
import { Subscription, timer, tap } from 'rxjs';
import { DeviceOverview, messageTypeguards } from './message.typeguards';

export interface DataFormat {
  timestamp: number;
  value: number;
}

export interface DeviceInformation {
  UUID: string;
  color: { r: number; g: number; b: number };
}

function getWSURL(serverURL: string): string {
  return `ws://${serverURL}/ws`;
}

function getDevicesURL(serverURL: string): string {
  return `http://${serverURL}/UUID`;
}

export class ServerDescription {
  readonly #devices = signal<DeviceInformation[]>([]);
  readonly #data = signal<Record<string, DataFormat[]>>({});
  #socket: WebSocket | null = null;
  readonly isConnected = signal<boolean>(false);
  readonly wsConnected = signal<boolean>(false);
  private deviceFetchSubscription: Subscription | null = null;
  data = this.#data.asReadonly();
  devices = this.#devices.asReadonly();
  serverIsReachable = signal<boolean>(false);

  readonly selectedDevices = linkedSignal<
    DeviceInformation[],
    Record<string, boolean>
  >({
    source: this.#devices,
    computation: (currentDevices, previous) => {
      const currentSelection = previous?.value ?? {};
      const newSelection: Record<string, boolean> = {};
      for (const device of currentDevices) {
        newSelection[device.UUID] = currentSelection[device.UUID] ?? false;
      }

      return newSelection as Record<string, boolean>;
    },
  });
  numSelectedDevices = computed(() => {
    const devices = this.selectedDevices();
    console.log(devices);
    const value = Object.values(devices).filter(
      selected => selected === true
    ).length;
    console.log('selected', value);
    return value;
  });

  limitedData = computed(() => {
    const currentData = this.data();
    const result: Record<string, DataFormat[]> = {};
    for (const [uuid, dataArray] of Object.entries(currentData)) {
      const n = dataArray.length / 2000;
      result[uuid] = dataArray.filter((_, index) => index % n === 0);
    }
  });

  constructor(
    readonly serverURL: string,
    private httpClient: HttpClient,
    private fetchInterval: number = 5000
  ) {
    this.startFetchingDevices();
  }

  private startFetchingDevices(): void {
    if (this.deviceFetchSubscription) {
      this.deviceFetchSubscription.unsubscribe();
    }
    this.deviceFetchSubscription = timer(0, this.fetchInterval).subscribe(
      () => {
        this.getUUIDs().subscribe({
          next: () => {
            this.serverIsReachable.set(true);
          },
          error: () => {
            console.error('Error fetching devices for', this.serverURL);
            this.serverIsReachable.set(false);
            // Here you might want to stop fetching devices or handle the error differently
          },
        });
      }
    );
  }

  private getUUIDs() {
    return this.httpClient
      .get<DeviceOverview>(getDevicesURL(this.serverURL))
      .pipe(
        tap(data => {
          if (data.devices && data.colors) {
            const mappedDevices = data.devices.map((device, index) => ({
              UUID: device.UUID,
              color: data.colors[index]?.color ?? { r: 0, g: 0, b: 0 },
            }));
            this.#devices.set(mappedDevices);
          }
        })
      );
  }

  toggleDevice(uuid: string) {
    console.log(uuid, this.selectedDevices()[uuid]);
    this.selectedDevices.update(value => {
      value[uuid] = !value[uuid];
      console.log(uuid, value[uuid]);
      return structuredClone(value);
    });
  }

  connect(): void {
    this.stopFetchingDevices();
    if (this.#socket && this.#socket.readyState === WebSocket.OPEN) {
      console.log('WebSocket ist bereits verbunden.');
      return;
    }
    const wsULR = getWSURL(this.serverURL);
    if (!wsULR) throw new Error('No server found');
    this.#socket = new WebSocket(wsULR);

    this.#socket.addEventListener('open', () => {
      this.#data.set({});
      this.isConnected.set(true);
      const devices: string = this.devices()
        .map(value => value.UUID)
        .join();
      console.log(devices);
      this.#socket?.send(devices);
    });

    this.#socket.addEventListener('message', event => {
      let parsedMessage: unknown;
      try {
        parsedMessage = JSON.parse(event.data);
      } catch {
        parsedMessage = event.data;
      }

      if (messageTypeguards.isOmnAIDataMessage(parsedMessage)) {
        this.#data.update(records => {
          parsedMessage.devices.forEach((uuid, index) => {
            const existingData = records[uuid] ?? [];
            const newDataPoints = parsedMessage.data.flatMap(point => ({
              timestamp: point.timestamp,
              value: point.value[index],
            }));

            if (
              existingData.length > 0 &&
              newDataPoints[0].timestamp < existingData[0].timestamp
            )
              records[uuid] = existingData;
            else records[uuid] = existingData.concat(newDataPoints);
          });

          return structuredClone(records);
        });
      } else {
        console.warn('Unbekanntes Nachrichtenformat:', parsedMessage);
      }
    });

    this.#socket.addEventListener('close', () => {
      this.isConnected.set(false);
      this.#socket = null;
    });

    this.#socket.addEventListener('error', error => {
      console.error('WebSocket Fehler:', error);
    });
  }

  disconnect(): void {
    if (this.#socket) {
      console.log('Schließe WebSocket Verbindung...');
      this.#socket.close();
    } else {
      console.log('Keine aktive WebSocket Verbindung.');
    }
    this.startFetchingDevices();
  }

  requestDataFromDeviceUUIDs(deviceUUIDS: string[] | null) {
    if (!this.isConnected() || !this.#socket) {
      this.connect();
    }

    const message =
      deviceUUIDS === null
        ? this.devices()
            .map(device => device.UUID)
            .join(' ')
        : deviceUUIDS.join(' ');

    if (this.#socket?.readyState === WebSocket.OPEN) {
      this.#socket.send(message);
      return;
    }

    this.#socket?.addEventListener(
      'open',
      () => {
        console.log('WebSocket jetzt geöffnet, sende Nachricht:', message);
        this.#socket?.send(message);
      },
      { once: true }
    );
  }

  stopFetchingDevices() {
    if (this.deviceFetchSubscription) {
      this.deviceFetchSubscription.unsubscribe();
      this.deviceFetchSubscription = null;
    }
  }
}

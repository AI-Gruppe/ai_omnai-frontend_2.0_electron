import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ServerDescription } from './omnAIServer';
import { DataFormat } from './data.models';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly httpClient = inject(HttpClient);
  readonly #servers = signal<Record<string, ServerDescription>>({});
  readonly servers = this.#servers.asReadonly();

  data = computed(() => {
    const combinedData: Record<string, DataFormat[]> = {};
    for (const [serverURL, server] of Object.entries(this.servers())) {
      // Here we're assuming that `server.data()` returns Record<string, DataFormat[]>
      const serverData = server.data();
      for (const [uuid, dataArray] of Object.entries(serverData)) {
        if (!combinedData[uuid]) {
          combinedData[uuid] = [];
        }
        combinedData[uuid] = combinedData[uuid].concat(dataArray);
      }
    }
    return combinedData;
  });
  limitedData = computed(() => {
    const combinedData: Record<string, DataFormat[]> = {};
    for (const [serverURL, server] of Object.entries(this.servers())) {
      const serverData = server.limitedData();
      for (const [uuid, dataArray] of Object.entries(serverData)) {
        if (!combinedData[uuid]) {
          combinedData[uuid] = [];
        }
        combinedData[uuid] = combinedData[uuid].concat(dataArray);
      }
    }
    return combinedData;
  });
  noServerReachable = computed(() => {
    const servers = Object.values(this.servers());
    return (
      !(servers.length > 0) ||
      servers.every(server => !server.serverIsReachable())
    );
  });
  allServersConnected = computed(() => {
    const servers = Object.values(this.servers());
    return servers.length > 0 && servers.every(server => server.isConnected());
  });
  noServerConnected = computed(() => {
    const servers = Object.values(this.servers());
    return (
      servers.length === 0 || servers.every(server => !server.isConnected())
    );
  });

  devicesAvailable = computed(() => {
    const servers = Object.values(this.servers());
    return servers.some(server => server.devices().length > 0);
  });

  noDeviceSelected = computed(() => {
    const servers = Object.values(this.servers());
    const areNoDevicesSelected = servers.every(server =>
      server.devices().every(device => !server.isDeviceSelected()(device.UUID))
    );

    return areNoDevicesSelected;
  });

  allDevicesSelected = computed(() => {
    const servers = Object.values(this.servers());
    if (servers.length === 0) return true;
    const areAllDevicesSelected = servers.every(server =>
      server.devices().every(device => server.isDeviceSelected()(device.UUID))
    );

    return areAllDevicesSelected;
  });

  allSelectedDevicesConnected = computed(() => {
    const servers = Object.values(this.servers());

    if (servers.length === 0) return true;
    return servers.every(server => {
      const selectedDevices = server
        .devices()
        .filter(device => server.isDeviceSelected()(device.UUID));
      return selectedDevices.length === 0 || server.isConnected();
    });
  });
  allDevicesConnected = computed(() => {
    const servers = Object.values(this.servers());
    if (servers.length === 0) return true;

    return servers.every(
      server =>
        server.isConnected() &&
        server.devices().every(device => server.isDeviceSelected()(device.UUID))
    );
  });

  // these colors can be used as fill colors
  curveColors = computed(() => {
    const colors: Record<string, string> = {};
    for (const server of Object.values(this.servers())) {
      for (const device of server.devices()) {
        const { r, g, b } = device.color;
        const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        colors[device.UUID] = hexColor;
      }
    }
    return colors;
  });

  constructor() {
    this.addServer('127.0.0.1:8080');
  }

  addServer(serverURL: string) {
    const server = new ServerDescription(serverURL, this.httpClient);
    this.#servers.update(servers => ({ ...servers, [serverURL]: server }));
  }

  removeServer(serverURL: string) {
    this.#servers.update(servers => {
      const newServers = { ...servers };
      delete newServers[serverURL];
      return newServers;
    });
  }

  connect(serverURL: string): void {
    const server = this.servers()[serverURL];
    if (!server) throw new Error(`Server ${serverURL} not found`);
    server.connect();
  }

  disconnect(serverURL: string): void {
    const server = this.servers()[serverURL];
    if (server) server.disconnect();
  }

  selectAllDevicesOfServer(serverURL: string) {
    const server = this.servers()[serverURL];
    if (server)
      server.devices().map(device => {
        server.selectDevice(device.UUID);
      });
  }

  unselectAllDevicesOfServer(serverURL: string) {
    const server = this.servers()[serverURL];
    if (server)
      server.devices().map(device => {
        server.selectDevice(device.UUID);
      });
  }

  toogleAllDevicesOfAllServers() {
    if (this.allServersConnected()) {
      this.disconnectAllDevicesOfAllServers();
    } else this.connectAllDevicesOfAllServers();
  }

  connectCurrentChoosenDevicesOfAllServers(): void {
    Object.values(this.servers()).forEach(server => {
      this.connect(server.serverURL);
    });
  }

  disconnectCurrentChoosenDevicesOfAllServers(): void {
    Object.values(this.servers()).forEach(server => {
      this.unselectAllDevicesOfServer(server.serverURL);
      this.disconnect(server.serverURL);
    });
  }

  connectAllDevicesOfAllServers(): void {
    Object.values(this.servers()).forEach(server => {
      this.selectAllDevicesOfServer(server.serverURL);
      this.connect(server.serverURL);
    });
  }

  disconnectAllDevicesOfAllServers(): void {
    Object.values(this.servers()).forEach(server => {
      this.unselectAllDevicesOfServer(server.serverURL);
      this.disconnect(server.serverURL);
    });
  }
}

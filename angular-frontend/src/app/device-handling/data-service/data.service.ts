import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { DataFormat, ServerDescription } from './omnAIServer';


@Injectable({ providedIn: 'root' })
export class DataService {
  #servers = signal<Record<string, ServerDescription>>({});
  servers = this.#servers.asReadonly();

  httpClient = inject(HttpClient);

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

  requestDataFromDeviceUUIDs(serverURL: string, deviceUUIDS: string[] | null) {
    const server = this.servers()[serverURL];
    if (!server) throw new Error(`Server ${serverURL} not found`);
    server.requestDataFromDeviceUUIDs(deviceUUIDS);
  }
}

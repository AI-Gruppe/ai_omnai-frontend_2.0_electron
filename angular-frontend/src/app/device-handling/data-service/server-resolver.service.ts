import { Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class omnAIServerResolver {
  private serverUrl = signal<string | null>('127.0.0.1:8080');
  omnAIServer = this.serverUrl.asReadonly();

  async findServer(possibleUrls: string[]): Promise<void> {
    for (const url of possibleUrls) {
      if (await this.pingServer(url)) {
        this.serverUrl.set(url);
        return;
      }
    }
    this.serverUrl.set(null);
  }

  setLocalServer(url: string): void {
    this.serverUrl.set(url);
  }

  private async pingServer(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
      return response.ok;
    } catch {
      return false;
    }
  }
}

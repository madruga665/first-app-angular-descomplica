import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  private clients: Client[] = [];

  getAllClients(): Observable<Client[]> {
    const clients = this.httpClient.get<Client[]>(
      'http://localhost:3000/clients'
    );

    return clients;
  }

  getClientById(clientId: string): Observable<Client> {
    const client = this.httpClient.get<Client>(
      `http://localhost:3000/clients/${clientId}`
    );

    return client;
  }

  createId(): string {
    this.httpClient.get<Client[]>('http://localhost:3000/clients').subscribe((clients) => {
      this.clients = clients;
    });

    const id = Number(this.clients[this.clients.length -1].id) + 1;

    return id.toString();
  }

  createClient(client: Client): Observable<Object> {
    return this.httpClient.post('http://localhost:3000/clients', client);
  }

  sayHello(name: string): string {
    return `Olá ${name}`;
  }
}

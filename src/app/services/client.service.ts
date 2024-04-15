import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor() {}

  private clients = [
    {
      id: '1',
      name: 'Luciano Amâncio',
      email: 'madruga665@gmail.com',
      password: 'madruga665',
      age: 37,
    },
    {
      id: '2',
      name: 'Vanessa Graziele',
      email: 'vanessa@gmail.com',
      password: 'vanessa123',
      age: 32,
    },
    {
      id: '3',
      name: 'Julia Amâncio',
      email: 'julia@gmail.com',
      password: 'juliaCabeçaDeBigorna',
      age: 15,
    },
  ];

  getClients(): Client[] {
    return this.clients;
  }

  getClientById(clientId: string): Client {
    const client = this.clients.find((client) => {
      return client.id === clientId;
    });

    return client as Client;
  }

  sayHello(name: string): string {
    return `Olá ${name}`;
  }
}

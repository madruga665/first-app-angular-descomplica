import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor() {}

  private clients = [
    { name: 'Luciano Amâncio' },
    { name: 'Vanessa Graziele' },
    { name: 'Julia Amâncio' },
  ];

  getClients(): Client[] {
    return this.clients;
  }

  sayHello(name: string) {
    return `Olá ${name}`;
  }
}

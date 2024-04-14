import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor() {}

  private clients = [
    { name: 'Luciano Amâncio', age: 37 },
    { name: 'Vanessa Graziele', age: 32 },
    { name: 'Julia Amâncio', age: 15 },
  ];

  getClients(): Client[] {
    return this.clients;
  }

  sayHello(name: string): string {
    return `Olá ${name}`;
  }
}

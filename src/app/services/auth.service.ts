import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientService } from './client.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router, private clientService: ClientService) {}

  private clientInMemoryDatabase = this.clientService.getAllClients();
  private showLoginError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getShowLoginError() {
    return this.showLoginError;
  }

  private navigate(): void {
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  private validateClientInfo(client: Client | undefined, password: string): boolean {
    if (!client || client?.password !== password) {
      this.showLoginError.next(true);

      return false;
    }

    return true;
  }

  login(email: string, password: string): void {
    this.clientService.getAllClients().subscribe(clients => {
      const client = clients.find((client) => {
        return client.email === email;
      });

      const loginSuccess = this.validateClientInfo(client, password);

      if (loginSuccess) {
        localStorage.setItem('isLogged', 'true');
        this.showLoginError.next(false);
        this.navigate();
      }
    });
  }

  verifyClientIsLogged(): boolean {
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged) {
      return JSON.parse(isLogged);
    }

    return false;
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.router.navigate(['/']);
  }
}

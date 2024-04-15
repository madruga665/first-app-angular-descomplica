import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

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

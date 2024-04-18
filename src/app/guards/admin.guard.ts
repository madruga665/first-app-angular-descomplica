import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService ) {}

  canActivate( _route: ActivatedRouteSnapshot,_state: RouterStateSnapshot): boolean {
    return this.authService.getClient().role === 'admin'
  }
}

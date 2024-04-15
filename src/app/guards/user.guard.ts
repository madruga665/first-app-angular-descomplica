import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";


@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean  {
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged !== 'true') {
      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}

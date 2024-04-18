import { Component, OnInit } from '@angular/core';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerTitle = 'Primeiro app com angular - Descomplica';
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor(private authService: AuthService, public adminGuard: AdminGuard) {}

  verifyClientIsLogged(): boolean {
    return this.authService.verifyClientIsLogged();
  }

  logout(): void {
    this.authService.logout();
  }
}

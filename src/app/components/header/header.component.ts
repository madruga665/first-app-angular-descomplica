import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerTitle = 'Primeiro app com angular - Descomplica';
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
}

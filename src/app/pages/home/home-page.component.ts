import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePage {
  pageTitle = 'Bem vindo ao meu primeiro app com angular';

  constructor(private clientService: ClientService) {}
}

import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss'],
})
export class ClientListPage {
  constructor(private clientService: ClientService) {}

  clients = this.clientService.getClients();
}

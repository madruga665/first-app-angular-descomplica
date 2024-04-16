import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.scss'],
})
export class ClientDetailsPageComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private activedRouter: ActivatedRoute
  ) {}

  client!: Client

  ngOnInit(): void {
    debugger;
    const clientId = this.activedRouter.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe((client) => {
        this.client = client;
      });
    }
  }
}

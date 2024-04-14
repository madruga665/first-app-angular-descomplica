import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor() {}

  @Input() clientList!: Client[];
  @Input() clientName!: string;
}

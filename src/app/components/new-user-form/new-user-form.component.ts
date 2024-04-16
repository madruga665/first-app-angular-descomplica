import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  @Input()
  clientList: Client[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  userForm = this.formBuilder.group({
    id: '',
    name: '',
    email: '',
    password: '',
    age: 0,
  });

  addClient() {
    this.userForm.value.id = this.clientService.createId();
    const clientData = this.userForm.value as Client
    this.clientService.createClient(clientData).subscribe((response) => {
      console.log(response);
      this.userForm.reset();
    });
  }
}

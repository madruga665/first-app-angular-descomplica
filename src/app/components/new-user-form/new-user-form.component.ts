import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  @Input() clientList: Client[] = [];

  userForm = this.formBuilder.group({
    name: '',
  });

  addClient() {
    this.clientList.push(this.userForm.value as Client);
    this.userForm.reset();
  }
}

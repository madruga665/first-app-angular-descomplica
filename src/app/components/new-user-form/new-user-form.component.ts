import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { validateCpf } from 'src/app/validators/validateCpf';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  @Input()
  clientList: Client[] = [];
  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  userForm = this.formBuilder.group(
    {
      id: '',
      name: '',
      email: ['', Validators.compose([Validators.pattern(this.regexEmail)])],
      password: '',
      age: 0,
      cpf: ['', validateCpf()],
    },
    {
      validators: [],
    }
  );

  addClient() {
    if (!this.userForm.valid) {
      alert('formulário invalido!');

      return;
    }

    this.userForm.value.id = this.clientService.createId();
    const clientData = this.userForm.value as Client;
    this.clientService.createClient(clientData).subscribe((response) => {
      console.log(response);
      this.userForm.reset();
    });
  }
}

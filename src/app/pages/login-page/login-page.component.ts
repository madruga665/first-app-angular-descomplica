import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {}

  userForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  clientInMemoryDatabase = this.clientService.getClients();
  showLoginError = false;

  navigate(): void {
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  validateClientInfo(client: Client | undefined): boolean {
    let isValidClient = true;

    if (!client) {
      isValidClient = false
      this.showLoginError = true;
    }

    const isCorrectPassword = client?.password === this.userForm.value.password;

    if (!isCorrectPassword) {
      isValidClient = false;
      this.showLoginError = true;
      this.userForm.reset();
    }

    return isValidClient;
  }

  login(): void {
    const client = this.clientInMemoryDatabase.find(({ email }) => {
      return email === this.userForm.value.email;
    });

    const loginSuccess = this.validateClientInfo(client) && client;

    if (loginSuccess) {
      localStorage.setItem('isLogged', 'true');
      this.navigate();
    }
  }
}

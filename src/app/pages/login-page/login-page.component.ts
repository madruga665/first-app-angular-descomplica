import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  userForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  showLoginError() {
    return this.authService.getShowLoginError();
  }

  login() {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;

    if (email && password) {
      this.authService.login(email, password);
    }

    this.userForm.reset();
  }
}

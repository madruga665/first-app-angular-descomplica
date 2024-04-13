import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePage {
  name = 'Luciano';
  pageTitle = 'Home Page';
  blueTitle = false;

  constructor(private clientService: ClientService) {}

  changeColor() {
    this.blueTitle = !this.blueTitle;
  }


  sayHello() {
    alert(this.clientService.sayHello(this.name));
  }
}

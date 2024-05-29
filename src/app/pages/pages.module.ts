import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home-page.component';
import { ClientListPage } from './client-list-page/client-list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DatePickerPageComponent } from './date-picker-page/date-picker-page.component';

@NgModule({
  declarations: [
    HomePage,
    LoginPageComponent,
    DashboardPageComponent,
    ClientListPage,
    ClientDetailsPageComponent,
    DatePickerPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    HomePage,
    LoginPageComponent,
    DashboardPageComponent,
    ClientListPage,
    ClientDetailsPageComponent,
  ],
})
export class PagesModule {}

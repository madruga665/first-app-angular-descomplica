import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    NewUserFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    NewUserFormComponent
  ]
})
export class ComponentsModule { }

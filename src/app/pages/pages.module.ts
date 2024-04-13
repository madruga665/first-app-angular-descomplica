import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home-page.component';
import { ClientListPage } from './client-list/client-list-page.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomePage,
    ClientListPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    HomePage,
    ClientListPage
  ]
})
export class PagesModule { }

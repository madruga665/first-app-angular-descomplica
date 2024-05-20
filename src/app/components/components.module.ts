import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductTableComponent } from './product-table/product-table.component';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    HeaderComponent,
    ClientListComponent,
    NewUserFormComponent,
    ProductTableComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    HeaderComponent,
    ClientListComponent,
    NewUserFormComponent,
    ProductTableComponent,
  ],
  providers: [provideNgxMask()],
})
export class ComponentsModule {}

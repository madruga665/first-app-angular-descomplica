import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page.component';
import { ClientListPage } from './pages/client-list/client-list-page.component';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'clients', component: ClientListPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

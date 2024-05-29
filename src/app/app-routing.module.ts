import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page.component';
import { ClientListPage } from './pages/client-list-page/client-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserGuard } from './guards/user.guard';
import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';
import { AdminGuard } from './guards/admin.guard';
import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPageComponent },
  { path: 'date-picker', component: DatePickerPageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [UserGuard] },
  { path: 'clients', component: ClientListPage, canActivate: [UserGuard, AdminGuard] },
  { path: 'clients/details/:id', component: ClientDetailsPageComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

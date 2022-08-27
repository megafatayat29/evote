import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifiedEmailComponent } from './verified-email/verified-email.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule) 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/:noPeserta',
    component: AccountComponent
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

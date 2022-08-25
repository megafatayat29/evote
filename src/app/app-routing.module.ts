import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifiedEmailComponent } from './pages/verified-email/verified-email.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  },
  { 
    path: '', 
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule) 
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
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'verified-email',
    component: VerifiedEmailComponent
  },
  {
    path: 'verified-email/:token',
    component: VerifiedEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

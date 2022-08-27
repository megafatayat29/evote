import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'verified-email',
    loadChildren: () => import('./pages/verified-email/verified-email.module')
    .then(m => m.VerifiedEmailModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

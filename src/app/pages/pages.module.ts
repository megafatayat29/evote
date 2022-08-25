import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register/services/register.service';
import { AccountComponent } from './account/account.component';
import { VerifiedEmailComponent } from './verified-email/verified-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    VerifiedEmailComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService
  ]
})
export class PagesModule { }

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
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { ListComponent } from './dashboard/components/list/list.component';

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    VerifiedEmailComponent,
    DashboardComponent,
    SidebarComponent,
    ListComponent
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

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { ListComponent } from './dashboard/components/list/list.component';
import { VotingBoardComponent } from './dashboard/components/voting-board/voting-board.component';
import { AbsensiComponent } from './dashboard/components/absensi/absensi.component';
import { VotePesertaComponent } from './vote-peserta/vote-peserta.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    DashboardComponent,
    ListComponent,
    SidebarComponent,
    VotingBoardComponent,
    AbsensiComponent,
    VotePesertaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }

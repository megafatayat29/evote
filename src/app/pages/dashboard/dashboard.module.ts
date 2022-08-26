import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegisterService } from '../register/services/register.service';
import { PesertaService } from './components/list/service/peserta.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    RegisterService,
    PesertaService
  ]
})
export class DashboardModule { }

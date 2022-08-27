import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegisterService } from '../register/services/register.service';
import { PesertaService } from './components/list/service/peserta.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { VotingBoardComponent } from './components/voting-board/voting-board.component';
import { CandidateService } from './components/voting-board/services/candidate.service';

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
    PesertaService,
    CandidateService
  ]
})
export class DashboardModule { }

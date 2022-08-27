import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsensiComponent } from './components/absensi/absensi.component';
import { ListComponent } from './components/list/list.component';
import { VotingBoardComponent } from './components/voting-board/voting-board.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'absensi',
    component: AbsensiComponent
  },
  {
    path: 'voting',
    component: VotingBoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

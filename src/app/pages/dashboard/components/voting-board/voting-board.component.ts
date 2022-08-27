import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-voting-board',
  templateUrl: './voting-board.component.html',
  styleUrls: ['./voting-board.component.scss']
})
export class VotingBoardComponent implements OnInit {

  admin: boolean = false;
  subscriber: Observer<any>;
  loading: boolean = false;
  count1: number;
  count2: number;

  constructor(
    private readonly candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    this.getCount();
    this.isAdmin();
  }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
  }

  getCount(): void {
    this.subscriber = {
      next: (count: any) => {
        this.count1 = count.data.calon1,
        this.count2 = count.data.calon2
      },
      error: console.error,
      complete: () => { this.loading = false },
    }

    this.loading = true;
    this.candidateService.getCount()
    .subscribe(this.subscriber);
  }

}

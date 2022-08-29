import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { AlertMessage } from 'src/app/shared/models/alert-message-interface';
import { Vote } from 'src/app/shared/models/vote.model';
import { CandidateService } from '../dashboard/components/voting-board/services/candidate.service';

@Component({
  selector: 'app-vote-peserta',
  templateUrl: './vote-peserta.component.html',
  styleUrls: ['./vote-peserta.component.scss']
})
export class VotePesertaComponent implements OnInit {

  loading: boolean = false;
  message?: AlertMessage;
  subscriber: Observer<any>;

  voteForm: FormGroup = new FormGroup({
    noPeserta: new FormControl('', [Validators.required]),
    vote: new FormControl('', [Validators.required]),
  })

  constructor(
    private readonly candidateService: CandidateService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    const vote: Vote = this.voteForm.value;
    console.log(vote);

    this.subscriber = {
      next: (response: any) => {
        this.message = {
          status: 'success',
          text: `Selamat, no peserta ${vote.noPeserta} berhasil melakukan voting!`
        }
      },
      error: (error: any) => {
        this.message = {
          status: 'warning',
          text: error.error.message
        }
      },
      complete: () => {this.loading = false}
    }
    
    this.loading = true;
    this.candidateService.save(vote)
    .subscribe(this.subscriber);

    setTimeout(() => {
      this.message = undefined;
    }, 10000);
  }
}

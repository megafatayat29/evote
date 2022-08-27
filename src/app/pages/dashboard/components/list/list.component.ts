import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { VerifiedEmailService } from 'src/app/pages/verified-email/verified-email.service';
import { AlertMessage } from 'src/app/shared/models/alert-message-interface';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { PesertaService } from './service/peserta.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  subscriber: Observer<any>;
  loading: boolean = false;
  @Input() verified: GuestBook[] = [];
  @Input() unverified: GuestBook[] = [];
  message?: AlertMessage;
  
  constructor(
    private readonly router: Router,
    private readonly pesertaService: PesertaService,
    private readonly emailService: VerifiedEmailService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subscriber = {
      next: (peserta: any) => {
        this.verified = peserta.verified;
        this.unverified = peserta.unverified;
      },
      error: console.error,
      complete: () => { this.loading = false },
    }

    this.loading = true;
    this.pesertaService.getAll()
    .subscribe(this.subscriber);
  }

  onView(noPeserta: string): void {
    this.subscriber = {
      next: (peserta: GuestBook) => {
        console.log(peserta);
        
      },
      error: console.error,
      complete: () => {this.loading = false}
    }
    
    this.loading = true;
    this.pesertaService.getByNoPeserta(noPeserta)
    .subscribe(this.subscriber);
  }

  sendVerif(peserta: any): void {
    this.emailService.sendEmailVerification(peserta.email)
    .subscribe({
      next: (value: any) => {
        this.message = {
          status: 'success',
          text: `Selamat, email verifikasi untuk ${peserta.nama} berhasil dikirimkan!`
        }
      },
      error: (err: any) => {
        console.log('email error')
      }, 
      complete: () => {
        console.log('email completed')  
      }
    })
  }

}

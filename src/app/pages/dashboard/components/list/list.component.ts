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

  admin: boolean = false;
  subscriber: Observer<any>;
  loading: boolean = false;
  @Input() verified: GuestBook[] = [];
  @Input() unverified: GuestBook[] = [];
  message?: AlertMessage;
  nama: any;
  nama1: any;
  
  constructor(
    private readonly router: Router,
    private readonly pesertaService: PesertaService,
    private readonly emailService: VerifiedEmailService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.isAdmin();
  }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
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
    this.router.navigateByUrl(`/account/${noPeserta}`);
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

  searchVerif() {
    if (this.nama == "") {
      this.ngOnInit();
    } else {
      this.verified = this.verified.filter(res => {
        return res.nama.toLocaleLowerCase().match(this.nama.toLocaleLowerCase())
      })
    }
  }

  searchUnverif() {
    if (this.nama1 == "") {
      this.ngOnInit();
    } else {
      this.unverified = this.unverified.filter(res => {
        return res.nama.toLocaleLowerCase().match(this.nama1.toLocaleLowerCase())
      })
    }
  }

}

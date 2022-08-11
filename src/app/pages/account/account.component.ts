import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessage } from 'src/app/shared/models/alert-message-interface';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loading: boolean = false;
  guestBook!: GuestBook;
  message?: AlertMessage;
  
  absenForm: FormGroup = new FormGroup({
    nama: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private readonly router: Router,
    private readonly accountService: AccountService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.loading = true;
    const guestBook: GuestBook = this.absenForm.value;

    // Hit Endpoint Buat Klik Hadir

    // this.registerService.save(guestBook)
    //   .subscribe(() => {
    //     this.onReset();
    //     this.router.navigateByUrl('/register');
    //   },
    //   (error: any) => console.error,
    //   () => this.loading = false
    //   );

    this.message = {
      status: 'success',
      text: `Selamat, ${guestBook.nama} berhasil mendaftar KONVERCAB V PC ISNU Surabaya!`
    }

    setTimeout(() => {
      this.message = undefined;
    }, 10000);

    this.onReset();
    this.router.navigateByUrl('/register');
  }

  onReset(): void {
    this.absenForm.reset();
  }

}

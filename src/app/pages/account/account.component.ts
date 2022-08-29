import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observer } from 'rxjs';
import { AlertMessage } from 'src/app/shared/models/alert-message-interface';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { PesertaService } from '../dashboard/components/list/service/peserta.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  admin: boolean = false;
  loading: boolean = false;
  guestBook!: GuestBook;
  message?: AlertMessage;
  noPeserta: string;
  subscriber: Observer<any>;
  currentData: any;
  
  absenForm: FormGroup = new FormGroup({
    nama: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly pesertaService: PesertaService,
  ) { }

  ngOnInit(): void {
    this.isAdmin();
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        return params.noPeserta ? params.noPeserta : '';
      })
    )
    .subscribe(
      {
        next: (noPeserta: string) => {
          if(noPeserta){
            this.noPeserta = noPeserta;
            this.onView(noPeserta);
          }
        },
        error: console.error
      }
    )
  }

  get f() { return this.absenForm.controls; }

  onSubmit(): void {
    this.loading = true;
    const guestBook: GuestBook = this.absenForm.value;
    console.log(guestBook);

    this.subscriber = {
      next: (response: any) => {
        console.log(response);
        this.message = {
          status: 'success',
          text: `Selamat, ${guestBook.nama} telah tercatat hadir pada KONVERCAB V PC ISNU Surabaya!`
        }
      },
      error: console.error,
      complete: () => {this.loading = false}
    }
    
    this.loading = true;
    this.pesertaService.sendHadir(this.noPeserta)
    .subscribe(this.subscriber);

    setTimeout(() => {
      this.message = undefined;
    }, 10000);

    this.onReset();
    this.router.navigateByUrl('/dashboard/list');
  }

  onReset(): void {
    this.absenForm.reset();
  }

  onView(noPeserta: string): void {
    this.subscriber = {
      next: (peserta: GuestBook) => {
        this.currentData = peserta;
        if (this.currentData) {
          this.f.nama.setValue(this.currentData.nama);
          this.f.email.setValue(this.currentData.email);
          }
      },
      error: console.error,
      complete: () => {this.loading = false}
    }
    
    this.loading = true;
    this.pesertaService.getByNoPeserta(noPeserta)
    .subscribe(this.subscriber);
  }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
  }

}

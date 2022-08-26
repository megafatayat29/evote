import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { VerifiedEmailService} from './verified-email.service';

@Component({
  selector: 'app-verified-email',
  templateUrl: './verified-email.component.html',
  styleUrls: ['./verified-email.component.scss']
})
export class VerifiedEmailComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly emailService: VerifiedEmailService
  ) { }

  isSend: boolean;
  guestBook: GuestBook;
  isRegistered: boolean;
  btnDisable: boolean;
  token: string;
  modeVerification: boolean;
  retry: boolean;
  isError: boolean = false;
  isVerified: boolean = false;
  
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        return params.token ? params.token : '';
      })
    ).subscribe(
      {
        next: (token: string) => {
          if(token){
            this.token = token;
          }
        },
        error: console.error
      }
    )
    if(this.token){
      this.modeVerification = true;
      this.isSend = true;
      this.retry = true;
      this.verifiedToken(this.token);
      this.retry = false;
      console.log(this.btnDisable);
      console.log(this.isSend);
    } else {
      const data = sessionStorage.getItem('register');
      this.guestBook = data? JSON.parse(data): null;
      if(data) {
        this.isRegistered = true;
        // this.send();
      } else {
        this.isRegistered = false;
      }
    }

  }

  verifiedToken(token: string): void {
    this.btnDisable = true;
    this.emailService.sendUndangan(token).subscribe(
      {
        next: (value: any) => {
          this.isSend = false;
          this.isVerified = true;
        },
        error: (err: any) => {
          this.isSend = false;
          this.isError = true;
        },
        complete: () => {
          this.btnDisable = false;
        }
      }
    )
  }

  send(): void {
    this.isSend = true;
    this.btnDisable = true;
    console.log(this.btnDisable);
    this.emailService.sendEmailVerification(this.guestBook.email)
    .subscribe({
      next: (value: any) => {
        this.isSend = false;
        console.log('email sended')
        this.btnDisable = false;
      },
      error: (err: any) => {
        this.isSend = false;
        console.log('email error')
        this.btnDisable = false;
      }, 
      complete: () => {
        this.isSend = false;
        console.log('email completed')  
        this.btnDisable = false;
      }
    })
  }

  register(): void {
    this.router.navigateByUrl("/register")
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessage } from 'src/app/shared/models/alert-message-interface';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  guestBook!: GuestBook;
  message?: AlertMessage;
  
  guestForm: FormGroup = new FormGroup({
    nama: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    noTelp: new FormControl(null, [Validators.required]),
    alamat: new FormControl(null, [Validators.required]),
    statusAnggota: new FormControl(null, [Validators.required]),
    pendidikanTerakhir: new FormControl(null, [Validators.required]),
    universitas: new FormControl(null, [Validators.required]),
  })

  constructor(
    private readonly router: Router,
    private readonly registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

  test():void{
    console.log(this.guestForm);
  }

  renderEmailErrMessage():string {
    const errorObj = this.guestForm.controls?.email?.errors
    if(errorObj?.required){
      return 'Email harus diisi'
    }
    return 'Email tidak valid'
  }

  onSubmit(): void {
    this.loading = true;
    const guestBook: GuestBook = this.guestForm.value;
    this.registerService.save(guestBook)
      .subscribe(
        {
          next: (value: any) => {
            this.onReset();        
            this.message = {
              status: 'success',
              text: `Selamat, ${guestBook.nama} berhasil mendaftar KONVERCAB V PC ISNU Surabaya!`
            }
            sessionStorage.setItem("register", JSON.stringify(guestBook));
            this.router.navigateByUrl('/verified-email');
          }, 
          error: (error: any) => {
            console.log(error);
            this.message = {
              status: 'danger',
              text: error.error ? error.error.message : error.message
            }
          },
          complete: () => this.loading = false  
        }
      );


    setTimeout(() => {
      this.message = undefined;
    }, 10000);
  }

  formatString(text: string, params: any[]): string {
    let i = 0;

    return ( text ? text.replace(/%s/g, () => params.slice(i, ++i) as any): '' );
  }

  onReset(): void {
    this.guestForm.reset();
  }

  isValid(): boolean {
    return !this.guestForm.get('name')?.value;
  }

  isFieldValid(fieldName: string, parent?: AbstractControl): {[key: string]: boolean} {
    let control: AbstractControl = this.guestForm.get(fieldName) as AbstractControl;

    const classes = {
      'is-invalid': false,
      'is-valid': false
    }

    if (parent) {
      control = parent;
    }
    if (control && control.touched && control.invalid) {
      classes['is-invalid'] = true;
    } else if (control && control.valid) {
      classes['is-valid'] = true;
    } 
    
    return classes;
  }

  getControl(name: string): AbstractControl {
    return this.guestForm.get(name) as AbstractControl;
  }

}

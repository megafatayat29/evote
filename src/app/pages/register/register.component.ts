import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestBook } from 'src/app/shared/models/guest-book.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  guestBook!: GuestBook;
  // message?: AlertMessage;
  
  guestForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    noTelp: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    edu: new FormControl(null, [Validators.required]),
    campus: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  test():void{
    console.log(this.guestForm);
  }
  
  renderPasswordErrMessage():string {
    const errorObj = this.guestForm.controls?.password?.errors
    if(errorObj?.required){
      return 'Password harus diisi'
    }
    return 'Password minimal 6 karakter'
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

    this.onReset();
    this.router.navigateByUrl('/contact');
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { Observable, EMPTY, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly guestSubject: Subject<boolean> = new Subject;

  constructor(
    private readonly http: HttpClient
  ) { }

  handleError(error: any): Observable<any> {
    console.error(error);

    alert('Terjadi kesalahan!');

    return EMPTY;
  }

  save(guestBook: GuestBook): Observable<any> {
    return this.http.post<any>(`https://e-vote-isnu-be.herokuapp.com/api/v1/register`, guestBook)
      .pipe(
        map(()=> this.guestSubject.next(true))
    )    
  }
  
}

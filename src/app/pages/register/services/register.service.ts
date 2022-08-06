import { Injectable } from '@angular/core';
import { Observable, EMPTY, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
}

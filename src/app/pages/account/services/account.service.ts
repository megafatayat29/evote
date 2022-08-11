import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountSubject: Subject<boolean> = new Subject;

  constructor(
    private readonly http: HttpClient
  ) { }

  handleError(error: any): Observable<any> {
    console.error(error);

    alert('Terjadi kesalahan!');

    return EMPTY;
  }

  // save(guestBook: GuestBook): Observable<any> {
  //   return this.http.post<any>(`/api/v1/register`, guestBook)
  //     .pipe(
  //       map(()=> this.accountSubject.next(true))
  //   )    
  // }

  getById(id: String): Observable<any> {
    return this.http.get<any>(`/api/v1/anggota/id/${id}`);
  }
}

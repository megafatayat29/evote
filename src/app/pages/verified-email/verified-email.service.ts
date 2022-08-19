import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifiedEmailService {
  
  private readonly guestSubject: Subject<boolean> = new Subject;

  constructor(
    private readonly http : HttpClient
  ) { }

  sendEmailVerification(email: string): Observable<any> {
    return this.http.post<any>(`/api/v1/service/email`, {"email" : email})
      .pipe(
        map(()=> this.guestSubject.next(true))
    )    
  }

  sendUndangan(token: string): Observable<any> {
    return this.http.get<any>(`/api/v1/anggota/authenticate/${token}`)
    .pipe(
      map(()=> this.guestSubject.next(true))
    )
  }
}

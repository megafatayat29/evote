import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesertaService {

  private readonly pesertaSubject: Subject<boolean> = new Subject;

  constructor(private readonly http: HttpClient) { }

  handleError(error: any): Observable<any> {
    console.error(error);

    alert('Terjadi kesalahan!');

    return EMPTY;
  }
  
  public getAll(): Observable<any> {
    return this.http.get<any>('https://e-vote-isnu-be.herokuapp.com/api/v1/anggota/list_anggota');
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, Subject } from 'rxjs';
import { GuestBook } from 'src/app/shared/models/guest-book.model';

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

  public getByNoPeserta(noPeserta: string): Observable<GuestBook> {
    return this.http.get<GuestBook>('https://e-vote-isnu-be.herokuapp.com/api/v1/anggota/nopeserta/' + noPeserta);
  }

  public delete(email: any): Observable<any> {
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders,
      body: email
    };
    return this.http.delete<any>('https://e-vote-isnu-be.herokuapp.com/api/v1/anggota', options)
      .pipe(
        map(()=> this.pesertaSubject.next(true))
      ) 
    ;
  }

  public sendHadir(noPeserta: string): Observable<any> {
    return this.http.get<any>('https://e-vote-isnu-be.herokuapp.com/api/v1/vote/absensi?noPeserta=' + noPeserta);
  }

  public getAbsensi(): Observable<any> {
    return this.http.get('https://e-vote-isnu-be.herokuapp.com/api/v1/vote/list_peserta_hadir');
  }
  
}

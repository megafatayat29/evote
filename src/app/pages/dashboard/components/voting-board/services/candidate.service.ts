import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, Subject } from 'rxjs';
import { Vote } from 'src/app/shared/models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private readonly candidateSubject: Subject<boolean> = new Subject;

  constructor(private readonly http: HttpClient) { }
  
  handleError(error: any): Observable<any> {
    console.error(error);

    alert('Terjadi kesalahan!');

    return EMPTY;
  }
  
  public getCount(): Observable<any> {
    return this.http.get<any>('https://e-vote-isnu-be.herokuapp.com/api/v1/vote/papan_score');
  }

  save(vote: Vote): Observable<any> {
    return this.http.post<any>(`https://e-vote-isnu-be.herokuapp.com/api/v1/vote`, vote)
      .pipe(
        map(()=> this.candidateSubject.next(true))
    )    
  }
}

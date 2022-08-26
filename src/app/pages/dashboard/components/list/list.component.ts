import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { GuestBook } from 'src/app/shared/models/guest-book.model';
import { PesertaService } from './service/peserta.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  subscriber: Observer<any>;
  loading: boolean = false;
  verified: GuestBook[] = [];
  unverified: GuestBook[] = [];
  
  constructor(
    private readonly router: Router,
    private readonly pesertaService: PesertaService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subscriber = {
      next: (peserta: any) => {
        this.verified = peserta.verified;
        this.unverified = peserta.unverified;
      },
      error: console.error,
      complete: () => { this.loading = false },
    }

    this.loading = true;
    this.pesertaService.getAll()
    .subscribe(this.subscriber);
  }

}

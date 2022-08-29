import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { PesertaService } from '../list/service/peserta.service';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.scss']
})
export class AbsensiComponent implements OnInit {

  admin: boolean = false;
  subscriber: Observer<any>;
  loading: boolean = false;
  listPeserta: any;
  count: number;

  constructor(
    private readonly router: Router,
    private readonly pesertaService: PesertaService
  ) { }

  ngOnInit(): void {
    this.isAdmin();
    this.getAll();
  }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
  }

  getAll(): void {
    this.subscriber = {
      next: (resp: any) => {
        console.log(resp);
        this.listPeserta = resp.peserta;
      },
      error: console.error,
      complete: () => { this.loading = false },
    }

    this.loading = true;
    this.pesertaService.getAbsensi()
    .subscribe(this.subscriber);
  }

}

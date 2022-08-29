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
  listPesertaVote: any;
  count: number;
  nama: any;
  nama1: any;
  p: any = 1;
  p2: any = 1;

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
        this.listPeserta = resp.peserta;
        this.listPesertaVote = resp.voted;
      },
      error: console.error,
      complete: () => { this.loading = false },
    }

    this.loading = true;
    this.pesertaService.getAbsensi()
    .subscribe(this.subscriber);
  }

  searchVote() {
    if (this.nama == "") {
      this.ngOnInit();
    } else {
      this.listPesertaVote = this.listPesertaVote.filter((res: { nama: string; }) => {
        return res.nama.toLocaleLowerCase().match(this.nama.toLocaleLowerCase())
      })
    }
  }

  searchUnvote() {
    if (this.nama1 == "") {
      this.ngOnInit();
    } else {
      this.listPeserta = this.listPeserta.filter((res: { nama: string; }) => {
        return res.nama.toLocaleLowerCase().match(this.nama1.toLocaleLowerCase())
      })
    }
  }

}

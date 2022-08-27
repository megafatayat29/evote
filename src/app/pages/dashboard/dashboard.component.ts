import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GuestBook } from 'src/app/shared/models/guest-book.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  admin: boolean = false;
  submenu: any;
  verified: GuestBook[] = [];
  unverified: GuestBook[] = [];

  constructor() { }

  ngOnInit(): void {
    this.isAdmin();
    this.getSubmenu();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   this.getSubmenu();
  // }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
  }

  getSubmenu(): void {
    console.log('masuk getSubmenu');
    const submenu = sessionStorage.getItem('submenu');
    if (submenu != null || submenu != '') {
      this.submenu = submenu;
      // window.location.reload();
    } else {
      this.submenu = 'list';
    }
  }

}

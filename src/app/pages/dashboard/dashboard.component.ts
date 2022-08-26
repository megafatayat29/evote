import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  admin: boolean = false;
  submenu: any;

  constructor() { }

  ngOnInit(): void {
    this.isAdmin();
    this.getSubmenu();
  }

  ngOnChanges(): void {
    this.getSubmenu();
  }

  isAdmin(): void {
    const user = sessionStorage.getItem('username');
    if (user == "alFaqir") {
      this.admin = true;
    }
  }

  getSubmenu(): void {
    const submenu = sessionStorage.getItem('submenu');
    if (submenu != null || submenu != '') {
      this.submenu = submenu;
    } else {
      this.submenu = 'list';
    }
  }

}

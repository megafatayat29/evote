import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  setSubmenuList(): void {
    sessionStorage.removeItem('submenu');
    sessionStorage.setItem('submenu', 'list')
  }

  setSubmenuVoting(): void {
    sessionStorage.removeItem('submenu');
    sessionStorage.setItem('submenu', 'voting')
  }

  setSubmenuAbsensi(): void {
    sessionStorage.removeItem('submenu');
    sessionStorage.setItem('submenu', 'absensi')
  }

}

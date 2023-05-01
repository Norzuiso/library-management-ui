import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LibraryService} from "../../../services/library/library.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapsed = true;

  roleNav = this.libraryService.libraryRole;

  constructor(private router: Router,
              private libraryService: LibraryService) {
  }

  ngOnInit(): void {
  }

  navigateMenu(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.libraryService.logout().subscribe(data => {
      if (data) {
        localStorage.setItem('role', 'user');
      }
    });
  }

  getRole() {
    return localStorage.getItem("role")
  }
}

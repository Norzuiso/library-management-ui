import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ROLE_FROM_NAV} from "../../app.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  roleNav: string = ROLE_FROM_NAV;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.router.navigate(["/books/create"]);
  }
}

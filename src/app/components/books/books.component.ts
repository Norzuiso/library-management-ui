import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.router.navigate(["/books/create"]);
  }
  getRole() {
    return localStorage.getItem("role")
  }
}

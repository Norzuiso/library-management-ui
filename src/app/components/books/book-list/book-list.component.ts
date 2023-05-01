import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/books/book.service";
import {BookSearch} from "../../../entities/book/book-search";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any
  bookSearch: BookSearch = new BookSearch();

  formGroup = new FormGroup({
    title: new FormControl(this.bookSearch.title),
  });


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fillBooks();
  }

  fillBooks() {
    this.bookService.callGetBooksFiltered(this.bookSearch).subscribe(data => {
      this.books = data
    });
  }
}

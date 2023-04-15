import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/books/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.callGetAllBooks().subscribe(data=>{
      this.books = data
      console.log(data)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/books/book.service";
import {BookEntity} from "../../../entities/book/book-entity";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  books: any

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.callGetAllBooks().subscribe(data=>{
      this.books = data
      console.log(data)
    });
  }

}

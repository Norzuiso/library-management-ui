import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/books/book.service";
import {BookEntity} from "../../../entities/book/book-entity";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  book: BookEntity = new BookEntity()

  constructor(private bookService: BookService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private titleService: Title) {

  }

  ngOnInit(): void {
    let id = 0;
    this.activeRoute.paramMap.subscribe(params => {
      id = parseInt(<string>params.get('id'))
    })
    this.bookService.callGetBookByID(id).subscribe(data => {
      this.book = data
      this.titleService.setTitle(this.book.title);
    });
  }

  loanBook() {

  }

  editBook() {

  }
}

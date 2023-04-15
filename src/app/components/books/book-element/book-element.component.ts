import {Component, Input, OnInit} from '@angular/core';
import {BookEntity} from "../../../entities/book/book-entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.css']
})
export class BookElementComponent implements OnInit {

  bookPath: string = ""

  @Input()
  book: BookEntity = new BookEntity();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.book.id != 0) {
      this.bookPath = "/books/" + this.book.id;
    }
  }

  bookSelected() {
    this.router.navigate([this.bookPath])
  }

}

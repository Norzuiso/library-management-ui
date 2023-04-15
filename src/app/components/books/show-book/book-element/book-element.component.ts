import {Component, Input, OnInit} from '@angular/core';
import {BookEntity} from "../../../../entities/book/book-entity";

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.css']
})
export class BookElementComponent implements OnInit {

  @Input()
  book: BookEntity = new BookEntity();

  constructor() { }

  ngOnInit(): void {
  }

}

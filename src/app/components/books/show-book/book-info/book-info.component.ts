import {Component, Input, OnInit} from '@angular/core';
import {BookEntity} from "../../../../entities/book/book-entity";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() book: BookEntity;

  constructor() {
  }

  ngOnInit(): void {
  }

}

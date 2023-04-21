import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../entities/reader/reader-search";
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {BookSearch} from "../../../entities/book/book-search";
import {BookEntity} from "../../../entities/book/book-entity";

@Component({
  selector: 'app-show-books-table',
  templateUrl: './show-books-table.component.html',
  styleUrls: ['./show-books-table.component.css']
})
export class ShowBooksTableComponent implements OnInit {
  @Input()
  books: any;
  @Input()
  displayedColumns: string[] = ["ID", "scdd", "Titulo", "Autor","Editorial", "Edition", "year"];

  @Input()
  totalElements: number;
  @Input()
  pageSize = 10;
  @Input()
  pageIndex = 0;
  @Input()
  pageEvent: PageEvent;
  showFirstLastButtons = true;
  @Input()
  bookSearch: BookSearch = new BookSearch();

  @Output()
  getSelectedBook  = new EventEmitter<BookEntity>();



  @Output()
  pageEventEmitter  = new EventEmitter<PageEvent>();
  constructor() {
  }

  ngOnInit(): void {
  }

  rowClicked(row: BookEntity) {
    this.getSelectedBook.emit(row)
  }

  handlePageEvent(page: PageEvent) {
    this.pageEventEmitter.emit(page)
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../../entities/reader/reader-search";
import {ReaderEntity} from "../../../../entities/reader/readerEntity";

@Component({
  selector: 'app-show-readers-table',
  templateUrl: './show-readers-table.component.html',
  styleUrls: ['./show-readers-table.component.css']
})
export class ShowReadersTableComponent implements OnInit {
  @Input()
  readers: any;
  @Input()
  displayedColumns: string[] = ["ID", "Nombre", "Dirección", "Número telefonico"];

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
  readerSearch: ReaderSearch = new ReaderSearch();

  @Output()
  getSelectedReader  = new EventEmitter<ReaderEntity>();



  @Output()
  pageEventEmitter  = new EventEmitter<PageEvent>();
  constructor() {
  }

  ngOnInit(): void {
  }

  rowClicked(row: ReaderEntity) {
    this.getSelectedReader.emit(row)
  }

  handlePageEvent(page: PageEvent) {
    this.pageEventEmitter.emit(page)
  }
}

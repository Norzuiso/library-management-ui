import { Component, OnInit } from '@angular/core';
import {ReadersService} from "../../../services/reader/readers.service";
import {MatTableDataSource} from "@angular/material/table";
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../entities/reader/reader-search";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-readers',
  templateUrl: './show-readers.component.html',
  styleUrls: ['./show-readers.component.css']
})
export class ShowReadersComponent implements OnInit {
  readers: any;
  displayedColumns: string[] = ["ID", "Nombre", "Dirección", "Número telefonico"];

  totalElements: number;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  showFirstLastButtons = true;
  readerSearch: ReaderSearch = new ReaderSearch();
  constructor(private readerService: ReadersService,
              private route: Router) {
    this.readerService.callGetReadersFilterAndPagination(this.pageIndex, this.pageSize, this.readerSearch).subscribe(data =>{
      this.readers = new MatTableDataSource<ReaderEntity>(data.content);
    });
  }

  ngOnInit(): void {
  }

  rowClicked(row: ReaderEntity) {
    this.route.navigate([`/readers/${row.id}`]);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalElements = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}

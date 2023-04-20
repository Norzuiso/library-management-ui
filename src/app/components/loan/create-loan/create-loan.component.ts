import { Component, OnInit } from '@angular/core';
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../entities/reader/reader-search";
import {Router} from "@angular/router";
import {AlertsService} from "../../alerts/alerts.service";
import {LoanService} from "../../../services/loan/loan.service";
import {BookService} from "../../../services/books/book.service";
import {ReadersService} from "../../../services/reader/readers.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  readers: any;

  selectedReader: ReaderEntity = new ReaderEntity();
  totalElements: number;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  showFirstLastButtons = true;
  readerSearch: ReaderSearch = new ReaderSearch();
  constructor(private router: Router,
              private alerts: AlertsService,
              private loanService: LoanService,
              private bookService: BookService,
              private readerService: ReadersService
  ) { }

  ngOnInit(): void {
    this.fillReaderList();
  }

  private fillReaderList() {
    if (this.selectedReader.id == 0) {
      this.readerService.callGetReadersFilterAndPagination(this.pageIndex, this.pageSize, this.readerSearch).subscribe(data => {
        this.readers = new MatTableDataSource<ReaderEntity>(data.content);
      });
    }
  }

  getRole() {
    return localStorage.getItem("role")
  }

  readerSelected(reader: ReaderEntity) {
    this.selectedReader = reader;
  }

  selectOtherReader() {
    this.selectedReader = new ReaderEntity();
    this.fillReaderList();
  }

  saveLoan() {

  }
}

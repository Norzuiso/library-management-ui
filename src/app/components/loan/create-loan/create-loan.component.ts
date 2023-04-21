import {Component, OnInit} from '@angular/core';
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../entities/reader/reader-search";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertsService} from "../../alerts/alerts.service";
import {LoanService} from "../../../services/loan/loan.service";
import {BookService} from "../../../services/books/book.service";
import {ReadersService} from "../../../services/reader/readers.service";
import {MatTableDataSource} from "@angular/material/table";
import {BookEntity} from "../../../entities/book/book-entity";
import {BookSearch} from "../../../entities/book/book-search";
import {LoanEntity} from "../../../entities/loan/loan-entity";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  readers: any;
  books: any;

  loan: LoanEntity = new LoanEntity();

  selectedBook: BookEntity = new BookEntity();
  selectedReader: ReaderEntity = new ReaderEntity();
  pageSize = 10;
  pageIndex = 0;
  readerSearch: ReaderSearch = new ReaderSearch();
  bookSearch: BookSearch = new BookSearch();
  date: any;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private router: Router,
              private alerts: AlertsService,
              private loanService: LoanService,
              private bookService: BookService,
              private activeRoute: ActivatedRoute,
              private readerService: ReadersService
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.loan.id = parseInt(<string>params.get('id'))
    })
    if (this.loan.id != 0 && !isNaN(this.loan.id)) {
      this.loanService.callGetLoanById(this.loan.id).subscribe(data => {
        this.loan = data;
      })
    } else {
      this.fillReaderList();
      this.fillBookList();
    }

  }

  private fillBookList() {
    if (this.selectedReader.id == 0) {
      this.bookService.callGetBooksFilterAndPagination(this.pageIndex, this.pageSize, this.bookSearch).subscribe(data => {
        this.books = new MatTableDataSource<BookEntity>(data.content);
      });
    }

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


  saveLoan() {
    let loanDate = this.range.get('start')?.value;
    if (loanDate != undefined){
      this.loan.loanDate = loanDate
    }else{
      this.alerts.error("Es necesario seleccionar la fecha del prestamo")
      return
    }
    let endDate= this.range.get('end')?.value;
    if (endDate != undefined){
      this.loan.expiredDate = endDate
    }else{
      this.alerts.error("Es necesario seleccionar la fecha de termino del prestamo")
      return
    }
    this.loan.id = 0;
    if (this.selectedBook.id != 0){
      this.loan.book = this.selectedBook
    }else{
      this.alerts.error("Es necesario seleccionar el libro")
      return
    }
    if (this.selectedReader.id != 0){
      this.loan.reader = this.selectedReader
    }else{
      this.alerts.error("Es necesario seleccionar el lector")
      return
    }

    this.loan.isActive = true;
    this.loanService.callCreateLoan(this.loan).subscribe(data=>{
      if (data.id ==0){
        this.alerts.error("Error al crear el prestamo")
      }else{
        this.alerts.success("Prestamo creado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(['/loan'])
      }
    });
  }

  bookSelected(book: BookEntity) {
    this.selectedBook = book;
  }

  selectOtherReader() {
    this.selectedReader = new ReaderEntity();
    this.fillReaderList();
  }

  selectOtherBook() {
    this.selectedBook = new BookEntity();
    this.fillReaderList();
  }

  onDateSelect($event: NgbDate) {
    console.log($event)
  }
}

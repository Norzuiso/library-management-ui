import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ReaderSearch} from "../../../entities/reader/reader-search";
import {ReadersService} from "../../../services/reader/readers.service";
import {LoanService} from "../../../services/loan/loan.service";
import {LoanSearch} from "../../../entities/loan/loan-search";
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {LoanEntity} from "../../../entities/loan/loan-entity";

@Component({
  selector: 'app-show-loan',
  templateUrl: './show-loan.component.html',
  styleUrls: ['./show-loan.component.css']
})
export class ShowLoanComponent implements OnInit {

  loans: any;
  displayedColumns: string[] = ["ID",
    "Libro",
    "Lector",
    "Fecha de prestamo",
    "Fecha para regreso",
    "Estatus"];
  totalElements: number;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  showFirstLastButtons = true;
  loanSearch: LoanSearch = new LoanSearch();

  constructor(private loanService: LoanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loanService.callGetAllLoans().subscribe(data=>{
      this.loans = new MatTableDataSource<LoanEntity>(data);
    })
  }
  rowClicked(row: ReaderEntity) {
    this.router.navigate([`/loan/${row.id}`]);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalElements = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}

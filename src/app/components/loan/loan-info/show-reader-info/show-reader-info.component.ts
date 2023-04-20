import {Component, Input, OnInit} from '@angular/core';
import {BookEntity} from "../../../../entities/book/book-entity";
import {ReaderEntity} from "../../../../entities/reader/readerEntity";
import {LoanEntity} from "../../../../entities/loan/loan-entity";

@Component({
  selector: 'app-show-reader-info',
  templateUrl: './show-reader-info.component.html',
  styleUrls: ['./show-reader-info.component.css']
})
export class ShowReaderInfoComponent implements OnInit {

  @Input() reader: ReaderEntity;

  constructor() {
  }

  ngOnInit(): void {
  }

}

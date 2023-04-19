import { Component, OnInit } from '@angular/core';
import {ReadersService} from "../../../services/reader/readers.service";

@Component({
  selector: 'app-show-readers',
  templateUrl: './show-readers.component.html',
  styleUrls: ['./show-readers.component.css']
})
export class ShowReadersComponent implements OnInit {
  readers: any;

  constructor(private readerService: ReadersService) { }

  ngOnInit(): void {
  }

}

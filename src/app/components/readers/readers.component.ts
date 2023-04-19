import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createReader() {

  }

  getRole() {
    return localStorage.getItem('role');
  }
}

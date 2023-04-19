import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  createReader() {
    this.route.navigate(['/readers/create'])
  }

  getRole() {
    return localStorage.getItem('role');
  }
}

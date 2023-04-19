import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  getRole() {
    return localStorage.getItem("role")
  }

  createLoan() {
    this.router.navigate(['/loan/create']);
  }
}

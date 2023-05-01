import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoanService} from "../../../services/loan/loan.service";
import {LoanEntity} from "../../../entities/loan/loan-entity";
import {Title} from "@angular/platform-browser";
import {AlertsService} from "../../alerts/alerts.service";

@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {
  loan = new LoanEntity();

  constructor(private activeRoute: ActivatedRoute,
              private route: Router,
              private loanService: LoanService,
              public alertsService: AlertsService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    let id = 0;
    this.activeRoute.paramMap.subscribe(params => {
      console.log(params)
      id = parseInt(<string>params.get('id'))
    })
    this.loanService.callGetLoanById(id).subscribe(data => {
      this.loan = data
      this.titleService.setTitle(this.loan.reader.name + '-' + this.loan.book.title);
    });
  }

  getRole() {
    return localStorage.getItem('role')
  }

  backBook() {
    this.loanService.callDeliveryLoan(this.loan).subscribe(data => {
      if (data.isActive) {
        this.alertsService.error("Error al entregar libro", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      } else {
        this.alertsService.success("Libro entregado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });

        this.route.navigate(['/loan']);
      }
    });
  }

  deleteLoan() {
    this.loanService.deleteById(this.loan.id).subscribe(data => {
      if (data) {
        this.route.navigate(['/loan'])
        this.alertsService.success("Libro eliminado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      } else {
        this.alertsService.error("El prestamo no se pudo eliminar", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }
    });
  }
}

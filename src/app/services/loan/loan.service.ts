import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoanEntity} from "../../entities/loan/loan-entity";
import {globalConstants} from "../../utils/global.constants";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private client: HttpClient) {
  }

  callGetAllLoans(): Observable<LoanEntity[]> {
    return this.client.get<LoanEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/loan`)
  }
  callGetLoanById(id: number): Observable<LoanEntity> {
    return this.client.get<LoanEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/loan/${id}`)
  }

  callCreateLoan(loan: LoanEntity):Observable<LoanEntity>{
    return this.client.post<LoanEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/loan`, loan);
  }


  callDeliveryLoan(loan: LoanEntity):Observable<LoanEntity>{
    return this.client.post<LoanEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/loan/back`, loan);
  }

}

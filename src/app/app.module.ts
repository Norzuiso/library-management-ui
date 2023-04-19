import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ReadersComponent} from './components/readers/readers.component';
import {LandingComponent} from './components/index/landing/landing.component';
import {FooterComponent} from './components/index/footer/footer.component';
import {NavComponent} from './components/index/nav/nav.component';
import {LoanComponent} from './components/loan/loan.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {BooksModule} from "./components/books/books.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AlertsComponent} from "./components/alerts/alerts.component";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ReadersModule} from "./components/readers/readers.module";
import { CreateLoanComponent } from './components/loan/create-loan/create-loan.component';
import { ShowLoanComponent } from './components/loan/show-loan/show-loan.component';
import { LoanInfoComponent } from './components/loan/loan-info/loan-info.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    LoanComponent,
    AlertsComponent,
    CreateLoanComponent,
    ShowLoanComponent,
    LoanInfoComponent,
  ],
  imports: [
    ReadersModule,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    BooksModule,
    NoopAnimationsModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

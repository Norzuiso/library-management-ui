import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {BooksComponent} from './components/books/books.component';
import {ReadersComponent} from './components/readers/readers.component';
import {LandingComponent} from './components/index/landing/landing.component';
import {FooterComponent} from './components/index/footer/footer.component';
import {NavComponent} from './components/index/nav/nav.component';
import {LoanComponent} from './components/loan/loan.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    ReadersComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

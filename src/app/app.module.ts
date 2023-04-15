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
import { ShowBookComponent } from './components/books/show-book/show-book.component';
import {AlertsComponent} from "./components/index/alerts/alerts.component";
import { BookElementComponent } from './components/books/book-element/book-element.component';
import {BooksModule} from "./components/books/books.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReadersComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    LoanComponent,
    AlertsComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    BooksModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

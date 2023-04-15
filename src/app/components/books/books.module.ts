import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books.component";
import {BookElementComponent} from "./show-book/book-element/book-element.component";
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../app.module";
import {ShowBookComponent} from "./show-book/show-book.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    BooksComponent,
    BookElementComponent,
    ShowBookComponent,
  ],
  exports: [
    BooksComponent,
    BookElementComponent,
    ShowBookComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class BooksModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books.component";
import {BookElementComponent} from "./book-element/book-element.component";
import {MatCardModule} from "@angular/material/card";
import {ShowBookComponent} from "./show-book/show-book.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { BookListComponent } from './book-list/book-list.component';
import {RouterLink} from "@angular/router";
import { CreateBooksComponent } from './create-books/create-books.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    BooksComponent,
    BookElementComponent,
    ShowBookComponent,
    BookListComponent,
    CreateBooksComponent,
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
    RouterLink,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class BooksModule {
}

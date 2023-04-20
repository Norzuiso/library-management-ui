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
import { BookInfoComponent } from './show-book/book-info/book-info.component';
import { ShowBooksTableComponent } from './show-books-table/show-books-table.component';
import { FilterBooksComponent } from './filter-books/filter-books.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookElementComponent,
    ShowBookComponent,
    BookListComponent,
    CreateBooksComponent,
    BookInfoComponent,
    ShowBooksTableComponent,
    FilterBooksComponent,
  ],
  exports: [
    BooksComponent,
    BookElementComponent,
    ShowBookComponent,
    BookInfoComponent,
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

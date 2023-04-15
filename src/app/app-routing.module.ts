import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/index/landing/landing.component";
import {LoginComponent} from "./components/login/login.component";
import {BooksComponent} from "./components/books/books.component";
import {ReadersComponent} from "./components/readers/readers.component";
import {LoanComponent} from "./components/loan/loan.component";
import {ShowBookComponent} from "./components/books/show-book/show-book.component";
import {CreateBooksComponent} from "./components/books/create-books/create-books.component";


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: LandingComponent, pathMatch: 'full'},
    {path: 'books', component: BooksComponent, pathMatch: 'full'},
  {
    path: 'books',
    children: [
      {path: 'create', component: CreateBooksComponent, title: 'Crear'},
      {path: ':id', component: ShowBookComponent, title: 'Libro'},
      {path: '', component: BooksComponent, pathMatch: 'full'},
    ]
  },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'readers', component: ReadersComponent, pathMatch: 'full'},
    {path: 'loan', component: LoanComponent, pathMatch: 'full'}
  ]
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

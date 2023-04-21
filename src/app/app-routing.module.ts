import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/index/landing/landing.component";
import {LoginComponent} from "./components/login/login.component";
import {BooksComponent} from "./components/books/books.component";
import {ReadersComponent} from "./components/readers/readers.component";
import {ShowBookComponent} from "./components/books/show-book/show-book.component";
import {CreateBooksComponent} from "./components/books/create-books/create-books.component";
import {CreateReaderComponent} from "./components/readers/create-reader/create-reader.component";
import {CreateLoanComponent} from "./components/loan/create-loan/create-loan.component";
import {LoanInfoComponent} from "./components/loan/loan-info/loan-info.component";
import {LoanComponent} from "./components/loan/loan.component";


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: LandingComponent, pathMatch: 'full'},
    {path: 'books', component: BooksComponent, pathMatch: 'full'},
    {
      path: 'books',
      children: [
        {path: 'create', component: CreateBooksComponent, title: 'Crear'},
        {path: 'create/:id', component: CreateBooksComponent, title: 'Crear'},
        {path: ':id', component: ShowBookComponent, title: 'Libro'},
        {path: '', component: BooksComponent, pathMatch: 'full'},
      ]
    },
    {
      path: 'readers',
      children: [
        {path: 'create', component: CreateReaderComponent, title: 'Crear'},
        {path: ':id', component: CreateReaderComponent, title: 'Lector'},
        {path: '', component: ReadersComponent, pathMatch: 'full'},
      ]
    },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {
      path: 'loan',
      children: [
        {path: 'create', component: CreateLoanComponent, title: 'Crear'},
        {path: 'create/:id', component: CreateLoanComponent, title: 'Editar'},
        {path: ':id', component: LoanInfoComponent, title: 'Prestamo'},
        {path: '', component: LoanComponent, pathMatch: 'full'},
      ]
    },
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

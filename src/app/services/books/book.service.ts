import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookEntity} from "../../entities/book/book-entity";
import {PaginationBook} from "../../entities/book/pagination-book";
import {BookSearch} from "../../entities/book/book-search";
import {globalConstants} from "../../utils/global.constants";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  callGetAllBooks(): Observable<BookEntity[]> {
    return this.http.get<BookEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book`);
  }
  callGetBookByID(id: number): Observable<BookEntity> {
    return this.http.get<BookEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/${id}`);
  }

  callGetAllBooksByPagination(page: number, amountOfElements: number): Observable<PaginationBook> {
    return this.http.get<PaginationBook>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/${page}/${amountOfElements}`);
  }

  callGetAllAvailableBooksByPagination(page: number, amountOfElements: number): Observable<PaginationBook> {
    return this.http.get<PaginationBook>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/available/${page}/${amountOfElements}`);
  }
  callGetAllAvailableBooks(): Observable<BookEntity[]> {
    return this.http.get<BookEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/available`);
  }

  callCreateBook(book: BookEntity): Observable<BookEntity> {
    return this.http.post<BookEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book`, book);
  }

  callGetBooksFiltered(bookSearch: BookSearch): Observable<BookEntity[]> {
    return this.http.post<BookEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/filter`, bookSearch);
  }

  callGetBooksFilterAndPagination(page: number, amountOfElements: number, bookSearch: BookSearch): Observable<PaginationBook> {
    return this.http.post<PaginationBook>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/filter/${page}/${amountOfElements}`, bookSearch);
  }

  callUpdateBook(id: any, book: BookEntity): Observable<BookEntity> {
    return this.http.put<BookEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/book/${id}`, book);
  }
}

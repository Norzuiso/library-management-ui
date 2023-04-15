import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LOCALHOST_8020_BUSINESS} from "../library.service";
import {BookEntity} from "../../entities/book-entity";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  callGetLibraryInfo(): Observable<BookEntity> {
    return this.http.get<BookEntity>(LOCALHOST_8020_BUSINESS + '/library');
  }
}

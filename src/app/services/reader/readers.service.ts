import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {globalConstants} from "../../utils/global.constants";
import {ReaderSearch} from "../../entities/reader/reader-search";
import {ReaderEntity} from "../../entities/reader/readerEntity";
import {PaginationReader} from "../../entities/reader/pagination-reader";

@Injectable({
  providedIn: 'root'
})
export class ReadersService {

  constructor(private http: HttpClient) {
  }

  callGetAllReaders(): Observable<ReaderEntity[]>{
    return this.http.get<ReaderEntity[]>(globalConstants.LOCALHOST_8020_BUSINESS+'/reader');
  }
  callGetReaderByID(id: number): Observable<ReaderEntity> {
    return this.http.get<ReaderEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/${id}`);
  }

  callGetAllReadersByPagination(page: number, amountOfElements: number): Observable<PaginationReader> {
    return this.http.get<PaginationReader>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/${page}/${amountOfElements}`);
  }

  callGetAllAvailableReadersByPagination(page: number, amountOfElements: number): Observable<PaginationReader> {
    return this.http.get<PaginationReader>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/available/${page}/${amountOfElements}`);
  }
  callGetAllAvailableReaders(): Observable<ReaderEntity[]> {
    return this.http.get<ReaderEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/available`);
  }

  callCreateReader(book: ReaderEntity): Observable<ReaderEntity> {
    return this.http.post<ReaderEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader`, book);
  }

  callGetReadersFiltered(bookSearch: ReaderSearch): Observable<ReaderEntity[]> {
    return this.http.post<ReaderEntity[]>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/filter`, bookSearch);
  }

  callGetReadersFilterAndPagination(page: number, amountOfElements: number, bookSearch: ReaderSearch): Observable<PaginationReader> {
    return this.http.post<PaginationReader>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/filter/${page}/${amountOfElements}`, bookSearch);
  }

  callUpdateReader(id: any, book: ReaderEntity): Observable<ReaderEntity> {
    return this.http.put<ReaderEntity>(`${globalConstants.LOCALHOST_8020_BUSINESS}/reader/${id}`, book);
  }
}

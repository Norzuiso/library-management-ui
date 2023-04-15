import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export const LOCALHOST_8020_BUSINESS = 'http://localhost:8081/api/persistence';

class LibraryEntity {
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  callGetLibraryInfo(): Observable<LibraryEntity> {
    return this.http.get<LibraryEntity>(LOCALHOST_8020_BUSINESS + '/library');
  }
}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {globalConstants} from "../../utils/global.constants";


class LibraryEntity {
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  libraryRole: string = "user"
  callGetLibraryInfo(): Observable<LibraryEntity> {
    return this.http.get<LibraryEntity>(globalConstants.LOCALHOST_8020_BUSINESS + '/library');
  }

  callLoginLibrary(password:string): Observable<Boolean> {
    localStorage.setItem('role', 'ADMINISTRADOR');


    return this.http.get<Boolean>(globalConstants.LOCALHOST_8020_BUSINESS + '/library/'+password);
  }

}

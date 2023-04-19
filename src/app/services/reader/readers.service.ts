import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReadersService {

  constructor(private http: HttpClient) {
  }

  callGetAllReaders(): Observer<Reader>
}

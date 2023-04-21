import { Component, OnInit } from '@angular/core';
import {LibraryEntity} from "../../../entities/libraryEntity";
import {LibraryService} from "../../../services/library/library.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  library: LibraryEntity = new LibraryEntity();

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.callGetLibraryInfo().subscribe(data=>{
      if (data instanceof LibraryEntity) {
        this.library = data;
      }
    });
  }

}

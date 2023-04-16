import {Component, OnInit} from '@angular/core';
import {BookEntity} from "../../../entities/book/book-entity";
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/books/book.service";
import {AlertsService} from "../../alerts/alerts.service";

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  book: BookEntity = new BookEntity();

  formGroup = new FormGroup({
    title: new FormControl(this.book.title),
    author: new FormControl(this.book.author),
    gender: new FormControl(this.book.gender),
    editorial: new FormControl(this.book.editorial),
    publishYear: new FormControl(this.book.publishYear),
    edition: new FormControl(this.book.edition),
    copiesQuantity: new FormControl(this.book.copiesQuantity),
    synopsis: new FormControl(this.book.synopsis),
    scdd: new FormControl(this.book.scdd),
    isAvailable: new FormControl(this.book.isAvailable),
  });

  constructor(private bookService: BookService,
              public alertsService: AlertsService) {
  }

  ngOnInit(): void {
  }

  saveBook() {
    this.bookService.callCreateBook(this.book).subscribe(data => {
      console.log(data.id != null)
      if (data.id != null) {
        console.log("Creado")
        this.alertsService.success("Libro creado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      } else {
        this.alertsService.error("Error al crear libro", {
          autoClose: true,
          keepAfterRouteChange: true
        });      }
    });
  }

}

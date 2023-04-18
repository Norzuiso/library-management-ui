import {Component, OnInit} from '@angular/core';
import {BookEntity} from "../../../entities/book/book-entity";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    title: new FormControl(this.book.title,
      [Validators.required]),
    author: new FormControl(this.book.author,
      [Validators.required]),
    gender: new FormControl(this.book.gender,
      [Validators.required]),
    editorial: new FormControl(this.book.editorial,
      [Validators.required]),
    publishYear: new FormControl(this.book.publishYear,
      [Validators.required]),
    edition: new FormControl(this.book.edition,
      [Validators.required]),
    copiesQuantity: new FormControl(this.book.copiesQuantity,
      [Validators.required]),
    synopsis: new FormControl(this.book.synopsis,
      [Validators.required]),
    scdd: new FormControl(this.book.scdd,
      [Validators.required]),
    isAvailable: new FormControl(this.book.isAvailable,
      [Validators.required]),
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

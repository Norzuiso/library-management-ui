import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/books/book.service";
import {BookEntity} from "../../../entities/book/book-entity";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AlertsService} from "../../alerts/alerts.service";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  book: BookEntity = new BookEntity()

  constructor(private bookService: BookService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              public alertsService: AlertsService,
              private titleService: Title) {

  }

  ngOnInit(): void {
    let id = 0;
    this.activeRoute.paramMap.subscribe(params => {
      id = parseInt(<string>params.get('id'))
    })
    this.bookService.callGetBookByID(id).subscribe(data => {
      this.book = data
      this.titleService.setTitle(this.book.title);
    });
  }

  loanBook() {

  }

  editBook() {
    this.router.navigate(['/books/create/' + this.book.id])

  }

  getRole() {
    return localStorage.getItem("role")
  }

  deleteBook() {
    this.bookService.deleteById(this.book.id).subscribe(data => {
      if (data) {
        this.router.navigate(['/books'])
        this.alertsService.success("Libro eliminado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      } else {
        this.alertsService.error("El libro no se pudo eliminar, es posible que existan prestamos con este libro", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }
    });
  }
}

import {BookService} from "../../services/books/book.service";
import {BookEntity} from "../book/book-entity";
import {ReaderEntity} from "../reader/readerEntity";

export class LoanEntity {

  id: number
  loanDate: Date
  expiredDate: Date
  isActive: boolean
  book: BookEntity
  reader: ReaderEntity
}

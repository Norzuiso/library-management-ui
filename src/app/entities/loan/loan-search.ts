import {BookEntity} from "../book/book-entity";
import {ReaderEntity} from "../reader/readerEntity";

export class LoanSearch {
  id: number
  loanDate: Date
  expiredDate: Date
  isActive: boolean
  book: BookEntity
  reader: ReaderEntity
}

import { AbstractBook } from './AbstractBook';

export class Author {
  private books: AbstractBook[] = [];

  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  public getBooks(): AbstractBook[] {
    return this.books;
  }
}
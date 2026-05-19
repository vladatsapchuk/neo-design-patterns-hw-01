import { AbstractBook } from './AbstractBook';
import { Author } from './Author';
export class EBook extends AbstractBook {
  constructor(
    title: string,
    year: number,
    private author: Author,
    private url: string
  ) {
    super(title, year);
    this.author.addBook(this);
  }

  public getAuthor(): Author {
    return this.author;
  }

  public getUrl(): string {
    return this.url;
  }

  public getDescription(): string {
    return `E-book "${this.getTitle()}" by ${this.author.getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }
}
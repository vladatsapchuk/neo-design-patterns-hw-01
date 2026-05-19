import { Book } from './Book';

export class Copy {
  private isAvailable: boolean = true;

  constructor(private book: Book) {}

  public getBook(): Book {
    return this.book;
  }

  public markAsBorrowed(): void {
    this.isAvailable = false;
  }

  public markAsAvailable(): void {
  this.isAvailable = true;
  }

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }
}
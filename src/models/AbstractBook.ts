import { Author } from "./Author";

export abstract class AbstractBook {
  constructor(
    private title: string,
    private year: number
  ) {}

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }

  public abstract getAuthor(): Author;

  public abstract getDescription(): string;
}
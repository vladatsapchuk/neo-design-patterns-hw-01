import { Copy } from './Copy';

export class Reader {
  private borrowedCopies: Copy[] = [];

  constructor(
    private id: string,
    private name: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public borrowCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  public returnCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter(
      borrowedCopy => borrowedCopy !== copy
    );
  }

  public hasBorrowedCopy(copy: Copy): boolean {
    return this.borrowedCopies.includes(copy);
  }

  public getBorrowedCopies(): Copy[] {
    return [...this.borrowedCopies];
  }
}
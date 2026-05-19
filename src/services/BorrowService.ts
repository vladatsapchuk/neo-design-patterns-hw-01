import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  public borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    copy.markAsBorrowed();
    reader.borrowCopy(copy);

    return true;
  }

  public returnBook(reader: Reader, copy: Copy): boolean {
    if (!reader.hasBorrowedCopy(copy)) {
      return false;
    }

    copy.markAsAvailable();
    reader.returnCopy(copy);

    return true;
  }
}
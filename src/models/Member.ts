import { Person } from "./Person";
import { Book } from "./Book";

export class Member extends Person {
    private borrowedBooks: Book[] = []

    borrowBook(book: Book): string {
        if (book.borrow()) {
            this.borrowedBooks.push(book)
            return `${this.name} borrowed "${book.getBookInformation()}"`;
        } else {
            return `Sorry, "${book.getBookInformation()}" is not available.`;
        }
    }

    returnBook(book: Book): string {
        const index = this.borrowedBooks.indexOf(book)
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1)
            return `${this.name} returned "${book.getBookInformation()}"`;
        } else {
            return `This book was not borrowed by ${this.name}.`;
        }
    }

    getDetails(): string {
        return `${super.getDetails()}, Borrowed Books: ${this.borrowedBooks.length}`;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const Person_1 = require("./Person");
class Member extends Person_1.Person {
    constructor() {
        super(...arguments);
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.borrow()) {
            this.borrowedBooks.push(book);
            return `${this.name} borrowed "${book.getBookInformation()}"`;
        }
        else {
            return `Sorry, "${book.getBookInformation()}" is not available.`;
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            return `${this.name} returned "${book.getBookInformation()}"`;
        }
        else {
            return `This book was not borrowed by ${this.name}.`;
        }
    }
    getDetails() {
        return `${super.getDetails()}, Borrowed Books: ${this.borrowedBooks.length}`;
    }
}
exports.Member = Member;

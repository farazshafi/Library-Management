"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added: ${book.getBookInformation()}`);
    }
    removeBook(book) {
        this.books = this.books.filter(b => b !== book);
        console.log(`Removed ${book.getBookInformation()}`);
    }
    registerMember(member) {
        this.members.push(member);
        console.log(`New memeber registerd ${member.getDetails()}`);
    }
    listBook() {
        this.books.forEach(book => console.log(book.getBookInformation()));
    }
}
exports.Library = Library;

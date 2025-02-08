"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isbn, quantity) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.quantity = quantity;
    }
    getBookInformation() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available Copies: ${this.quantity}`;
    }
    borrow() {
        if (this.quantity > 0) {
            this.quantity--;
            return true;
        }
        else {
            return false;
        }
    }
    returnBook() {
        this.quantity++;
    }
}
exports.Book = Book;

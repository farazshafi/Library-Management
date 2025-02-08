"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const Person_1 = require("./Person");
class Librarian extends Person_1.Person {
    addBook(library, book) {
        library.addBook(book);
    }
    removeBook(library, book) {
        library.removeBook(book);
    }
    getDetails() {
        return `${super.getDetails()} (Librarian)`;
    }
}
exports.Librarian = Librarian;

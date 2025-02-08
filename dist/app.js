"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./models/Book");
const Librarian_1 = require("./models/Librarian");
const Library_1 = require("./models/Library");
const Member_1 = require("./models/Member");
const library = new Library_1.Library();
const librarian = new Librarian_1.Librarian(1, 'Faraz shafi');
const ashique = new Member_1.Member(2, 'Mohammed Ashique');
const jithin = new Member_1.Member(3, 'Jithin Lal');
const shuraif = new Member_1.Member(4, 'Mohammed Shuraif');
const book1 = new Book_1.Book('Atomic Habits', 'James Clear', '12345', 5);
const book2 = new Book_1.Book("The Hobbit", "J.R.R. Tolkien", "789012", 2);
const book3 = new Book_1.Book("Clean Code", "Robert C. Martin", "345678", 3);
const book4 = new Book_1.Book("The Pragmatic Programmer", "Andrew Hunt and David Thomas", "901234", 4);
const book5 = new Book_1.Book("The 7 Habits of Highly Effective People", "Stephen Covey", "567890", 5);
librarian.addBook(library, book1);
librarian.addBook(library, book2);
librarian.addBook(library, book3);
librarian.addBook(library, book4);
librarian.addBook(library, book5);
library.registerMember(shuraif);
console.log(shuraif.borrowBook(book1));
console.log(shuraif.borrowBook(book2));
// list avalilable books
console.log(library.listBook());
// memeber return book
console.log(shuraif.returnBook(book2));
library.listBook();

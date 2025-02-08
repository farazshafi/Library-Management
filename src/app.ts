import { Book } from "./models/Book"
import { Librarian } from "./models/Librarian"
import { Library } from "./models/Library"
import { Member } from "./models/Member"

const library = new Library()

const librarian = new Librarian(1,'Faraz shafi')

const ashique = new Member(2,'Mohammed Ashique')
const jithin = new Member(3,'Jithin Lal')
const shuraif = new Member(4,'Mohammed Shuraif')

const book1 = new Book('Atomic Habits','James Clear','12345',3)
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "789012",2)
const book3 = new Book("Clean Code", "Robert C. Martin", "345678", 3);
const book4 = new Book("The Pragmatic Programmer", "Andrew Hunt and David Thomas", "901234", 4);
const book5 = new Book("The 7 Habits of Highly Effective People", "Stephen Covey", "567890", 5);

librarian.addBook(library,book1)
librarian.addBook(library,book2)
librarian.addBook(library,book3)
librarian.addBook(library,book4)
librarian.addBook(library,book5)

library.registerMember(shuraif)

console.log(shuraif.borrowBook(book1))
console.log(shuraif.borrowBook(book2))

// list avalilable books
console.log(library.listBook())

// memeber return book
console.log(shuraif.returnBook(book2))

library.listBook()
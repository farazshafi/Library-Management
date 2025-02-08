import { Book } from "./Book";
import { Member } from "./Member";

export class Library {
    private books: Book[] = []
    private members: Member[] = []

    addBook(book: Book): void {
        this.books.push(book)
        console.log(`Added: ${book.getBookInformation()}`);
    }

    removeBook(book: Book): void {
        this.books = this.books.filter(b => b !== book)
        console.log(`Removed ${book.getBookInformation()}`)
    }

    registerMember(member: Member): void {
        this.members.push(member)
        console.log(`New memeber registerd ${member.getDetails()}`)
    }

    listBook(): void {
        this.books.forEach(book => console.log(book.getBookInformation()))
    }
}

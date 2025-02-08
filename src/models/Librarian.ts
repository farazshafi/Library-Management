import { Book } from "./Book"
import { Library } from "./Library"
import { Person } from "./Person"


export class Librarian extends Person{
    addBook(library:Library,book:Book):void{
        library.addBook(book)
    }
    
    removeBook(library:Library, book:Book): void{
        library.removeBook(book)
    }
    
    getDetails(): string {
        return `${super.getDetails()} (Librarian)`
    }
}
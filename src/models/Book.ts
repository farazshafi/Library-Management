export class Book {
    private title: string;
    private author: string;
    private isbn: string;
    private quantity: number;

    constructor(title: string, author: string, isbn: string, quantity: number) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.quantity = quantity;
    }

    getBookInformation(): string {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available Copies: ${this.quantity}`;
    }

    borrow(): boolean {
        if(this.quantity > 0){
            this.quantity --
            return true
        }else{
            return false
        }
    }

    returnBook():void {
        this.quantity ++
    }
}
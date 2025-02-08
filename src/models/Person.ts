export class Person {
    protected id: number;
    protected name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}
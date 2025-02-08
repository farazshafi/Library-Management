"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
exports.Person = Person;

"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let person = new Person('César', 'Vega');
console.log(person.toJson()); // {"firstName":"César","lastName":"Vega"}

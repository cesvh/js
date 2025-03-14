"use strict";
class Person {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `Nombre: ${this.firstName} ${this.lastName}. Año: ${this.year}.`;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, year, jobTitle) {
        // Llamada al constructor de la clase padre
        super(firstName, lastName, year);
        this.jobTitle = jobTitle;
    }
    // Sobreescritura del método describe()
    describe() {
        return super.describe() + `Yo soy ${this.jobTitle}.`;
    }
}
let employee = new Employee('César', 'Vega', 1991, 'Software Engineer');
console.log(employee.getFullName());
console.log(employee.describe());

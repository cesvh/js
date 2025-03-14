"use strict";
class Employee {
    // Las clases abstractas no se pueden instanciar
    // Una clase abstracta tiene al menos un método abstracto.
    // Un método abstracto no contiene implementación. Solo define la firma del método, sin incluir el cuerpo del mismo
    // Para utilizar una clase abstracta, debe heredarla y proporcionar la implementación de los métodos abstractos
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a day.`;
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let cesar = new FullTimeEmployee('César', 'Vega', 1523.8);
let ces = new Contractor('Ces', 'VH', 190.47, 8);
console.log(cesar.compensationStatement()); // César Vega makes 1523.8 a day.
console.log(ces.compensationStatement()); // Ces VH makes 1523.8 a day.

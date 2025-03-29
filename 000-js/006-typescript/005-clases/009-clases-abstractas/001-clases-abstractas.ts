abstract class Employee {
    // Las clases abstractas no se pueden instanciar
    // Una clase abstracta tiene al menos un método abstracto.
    // Un método abstracto no contiene implementación. Solo define la firma del método, sin incluir el cuerpo del mismo
    // Para utilizar una clase abstracta, debe heredarla y proporcionar la implementación de los métodos abstractos
    constructor(private firstName: string, private lastName: string) {}

    abstract getSalary(): number;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a day.`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        private rate: number,
        private hours: number
    ) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let cesar = new FullTimeEmployee('César', 'Vega', 1523.8);
let ces = new Contractor('Ces', 'VH', 190.47, 8);

console.log(cesar.compensationStatement()); // César Vega makes 1523.8 a day.
console.log(ces.compensationStatement()); // Ces VH makes 1523.8 a day.

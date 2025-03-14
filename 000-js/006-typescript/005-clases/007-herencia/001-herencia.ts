class Person {
    constructor(private firstName: string, private lastName: string, private year: number) {}
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        describe(): string {
            return `Nombre: ${this.firstName} ${this.lastName}. Año: ${this.year}.`;
        }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        year: number,
        private jobTitle: string) {
        
        // Llamada al constructor de la clase padre
        super(firstName, lastName, year);
    }

    // Sobreescritura del método describe()
    describe(): string {
        return super.describe() + `Yo soy ${this.jobTitle}.`;
    }
}

let employee = new Employee('César', 'Vega', 1991, 'Software Engineer');
console.log(employee.getFullName()); 
console.log(employee.describe());
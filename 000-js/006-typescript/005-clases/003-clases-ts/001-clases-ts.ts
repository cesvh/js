class Person {
    telefono: string;
    nombre: string;
    apellido: string;

    constructor(telefono: string, nombre: string, apellido: string) {
        this.telefono = telefono;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    obtenerDatos(): string {
        return `${this.nombre} ${this.apellido}: ${this.telefono}`;
    }
}

let persona = new Person("171280926", 'cesar', 'vega');
console.log(persona.obtenerDatos());

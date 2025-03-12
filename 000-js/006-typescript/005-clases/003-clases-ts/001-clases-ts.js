"use strict";
class Person {
    constructor(telefono, nombre, apellido) {
        this.telefono = telefono;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    obtenerDatos() {
        return `${this.nombre} ${this.apellido}: ${this.telefono}`;
    }
}
let persona = new Person("171280926", 'cesar', 'vega');
console.log(persona.obtenerDatos());

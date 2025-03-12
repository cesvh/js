"use strict";
class Persona {
    constructor(clave, nombre, usuario, team, myNumber) {
        this.clave = clave;
        this.nombre = nombre;
        this.usuario = usuario;
        this.team = team;
        this.myNumber = myNumber;
    }
    obtenerDatos() {
        return `${this.clave}: ${this.nombre} ${this.usuario} - ${this.team} - ${this.myNumber}`;
    }
}
let persona = new Persona('153-07-3130', 'John', 'Doe', 'Desarrollo', 2);
console.log(persona.obtenerDatos());
console.log(persona.team);

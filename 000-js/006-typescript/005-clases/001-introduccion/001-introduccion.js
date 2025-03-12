function Persona(telefono, nombre, apellido) {
    this.telefono = telefono;
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.obtenerDatos = function () {
    return `${this.nombre} ${this.apellido}: ${this.telefono}`;
}

let persona = new Persona('82-8789-7572','Cesar','Vega');
console.log(persona.obtenerDatos());
type Persona = {
    nombre: string,
    edad: number
};

let persona: Persona = {
    nombre: 'césar',
    edad: 1991
};

console.log(`Mi nombre es ${persona.nombre.toUpperCase()} y soy del  ${persona.edad}`);

class Persona {
    constructor(personaNombre, personaEdad){
        this.personaNombre = personaNombre;
        this.personaEdad = personaEdad;
    }

    get obtenerInformacion(){
        return `${this.personaNombre} - ${this.personaEdad}`;
    }
}

class Usuario extends Persona {
    constructor(nombre, edad, libro){
        super(nombre, edad);
        this.libro = libro;
    }

    obtenerLibro(){
        return `${this.libro}`;
    }

    /* Sobreescritura del método padre */
    get obtenerInformacion() {
        return `${super.obtenerInformacion} - ${this.libro}`;
    }
}

const persona1 = new Persona('Lao', 1991);
console.log(persona1);
console.log(persona1.personaNombre);
console.log(persona1.personaEdad);
console.log(persona1.obtenerInformacion);

const usuario1 = new Usuario('Lao', 1991, 'Dao The King');
console.log(usuario1);
console.log(usuario1.obtenerLibro());
console.log(usuario1.obtenerInformacion); /* Sobreescritura del método padre */

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\004-herencia.js
Persona { personaNombre: 'Lao', personaEdad: 1991 }
Lao
1991
Lao - 1991
Usuario {
  personaNombre: 'Lao',
  personaEdad: 1991,
  libro: 'Dao The King'
}
Dao The King
Lao - 1991 - Dao The King
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

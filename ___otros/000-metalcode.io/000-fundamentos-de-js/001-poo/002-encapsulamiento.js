class Usuario {
    #usuarioContrasenia; /*Atributo privado*/
    constructor(usuarioNombre, usuarioContrasenia){
        this.usuarioNombre = usuarioNombre;
        this.#usuarioContrasenia = usuarioContrasenia;
    }

    /* Método privado */
    #obtenerContrasenia(){
        return `${this.#usuarioContrasenia}`;
    }

    /* Método público */
    obtenerContrasenia2(){
        return `${this.#usuarioContrasenia}`;
    }

    obtenerInformacion(){
        return `${this.usuarioNombre}; ${this.#obtenerContrasenia()}`;
    }
}

const usuario1 = new Usuario('Lao', 'Tse297');
console.log(usuario1);
console.log(usuario1.usuarioNombre);
// console.log(usuario1.#usuarioContrasenia); /* Error al tratar de acceder a un campo privado */
// console.log(usuario1.#obtenerContrasenia()); /* Error al tratar de acceder a un método privado */
console.log(usuario1.obtenerContrasenia2());
console.log(usuario1.obtenerInformacion());

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\002-encapsulamiento.js
Usuario { usuarioNombre: 'Lao' }
Lao
Tse297
Lao; Tse297
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

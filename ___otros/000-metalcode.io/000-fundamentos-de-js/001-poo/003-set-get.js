class Usuario {
    #usuarioEdad = "";
    
    /* Al poner la palabra reservada set o get se convierte en una propiedad/atributo */
    set usuarioEdad(valor){
        if(valor < 1991){
            this.#usuarioEdad = 0;
        } else {
            this.#usuarioEdad = valor;
        }
    }

    get usuarioEdad(){
        return this.#usuarioEdad;
    }
}

const usuario1 = new Usuario();
usuario1.usuarioEdad = 1990; /* set */
console.log(usuario1.usuarioEdad); /* Accedemos como propiedad por estar declarada como get */

usuario1.usuarioEdad = 1991; /* set */
console.log(usuario1.usuarioEdad); /* Accedemos como propiedad por estar declarada como get */

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\003-set-get.js
0
1991
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

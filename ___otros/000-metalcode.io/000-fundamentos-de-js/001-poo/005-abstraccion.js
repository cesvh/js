class Nombres {
    #nombres = "";
    #separador = ",";
    #tamanio = 0;

    constructor(separador = ","){
        this.#separador = separador;
    }

    agregarNombre(nombre){
        if(this.#nombres){
            this.#nombres += this.#separador;
        }
        this.#nombres += nombre;
        this.#tamanio++;
    }

    get contenido(){
        return this.#nombres;
    }

    get tamanio(){
        return this.#tamanio;
    }
}

const nombre = new Nombres("|");
nombre.agregarNombre("Lao");
console.log(nombre.contenido);
console.log(nombre.tamanio);
nombre.agregarNombre("Yun");
console.log(nombre.contenido);
console.log(nombre.tamanio);
nombre.agregarNombre("Isaac");
console.log(nombre.contenido);
console.log(nombre.tamanio);
nombre.agregarNombre("Linus");
console.log(nombre.contenido);
console.log(nombre.tamanio);

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\005-abstraccion.js
Lao
1
Lao|Yun
2
Lao|Yun|Isaac
3
Lao|Yun|Isaac|Linus
4
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

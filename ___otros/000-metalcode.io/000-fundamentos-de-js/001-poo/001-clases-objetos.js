class Usuario {
    constructor (usuarioNombre, usuarioEdad) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioEdad = usuarioEdad;
    }

    mostrarNombre(){
        console.log(`usuarioNombre: ${this.usuarioNombre}`);
    }

    mostrarEdad(){
        console.log(`usuarioEdad: ${this.usuarioEdad}`);
    }

    mostrarInformacion(){
        console.log(`usuarioNombre: ${this.usuarioNombre}, usuarioEdad: ${this.usuarioEdad}`);
    }
}

const usuario1 = new Usuario('César', 1991);
const usuario2 = new Usuario('Ángel', 1991);

console.log(usuario1);
console.log(usuario1.usuarioNombre);
console.log(usuario1.usuarioEdad);
usuario1.mostrarNombre();
usuario1.mostrarEdad();
usuario1.mostrarInformacion();

console.log(usuario2);
console.log(usuario2.usuarioNombre);
console.log(usuario2.usuarioEdad);
usuario2.mostrarNombre();
usuario2.mostrarEdad();
usuario2.mostrarInformacion();

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\001-clases-objetos.js
Usuario { usuarioNombre: 'César', usuarioEdad: 1991 }
César
1991
usuarioNombre: César
usuarioEdad: 1991
usuarioNombre: César, usuarioEdad: 1991
Usuario { usuarioNombre: 'Ángel', usuarioEdad: 1991 }
Ángel
1991
usuarioNombre: Ángel
usuarioEdad: 1991
usuarioNombre: Ángel, usuarioEdad: 1991
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

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
console.log(usuario1.mostrarNombre());
console.log(usuario1.mostrarEdad());
console.log(usuario1.mostrarInformacion());

console.log(usuario2);
console.log(usuario2.usuarioNombre);
console.log(usuario2.usuarioEdad);
console.log(usuario2.mostrarNombre());
console.log(usuario2.mostrarEdad());
console.log(usuario2.mostrarInformacion());

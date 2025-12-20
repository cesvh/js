/*

Objeto:
    Estructura de datos que tiene atributos y comportamientos

*/

const usuario = {
    usuarioNombre: "César",
    usuarioNacimiento: 1991,
    mostrarInformacion: function(){
        return `usuarioNombre: ${this.usuarioNombre}; usuarioNacimiento: ${this.usuarioNacimiento}`;
    },
    informacionBasica: () => { 
        return `Información básica`;
    },
    informacionBasica2: miTexto => { 
        return `Información básica2: ${miTexto}`; 
    },
};

console.log(usuario.usuarioNombre);
console.log(usuario.usuarioNacimiento);
const usuarioInformacion = usuario.mostrarInformacion();
console.log(usuarioInformacion);
const usuarioInformacionBasica = usuario.informacionBasica();
console.log(usuarioInformacionBasica);
const usuarioInformacionBasica2 = usuario.informacionBasica2("Parámetro 1");
console.log(usuarioInformacionBasica2);

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\000-objeto.js
César
1991
usuarioNombre: César; usuarioNacimiento: 1991
Información básica
Información básica2: Parámetro 1
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

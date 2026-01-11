const fn1 = function(nombre) {
    return `Nombre: ${nombre}`;
};

console.log(fn1("César"));

const fn2 = (nombre) => `Nombre: ${nombre}`;

console.log(fn1("César"));

const fn3 = (nombre, edad) => {
    const greeting = `Hola ${nombre}`;
    const ageMessage = edad ? `Tienes ${edad} años` : "Sin dato";
    return `${greeting}. ${ageMessage}`;
};

console.log(fn3("César", 1991));
console.log(fn3("César"));

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\003-arrow-function.js
Nombre: César
Nombre: César
Hola César. Tienes 1991 años
Hola César. Sin dato
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

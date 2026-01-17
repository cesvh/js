const objetoLibro1 = { nombre: "neuromante", precio: 500 };
const objetoLibro2 = { ...objetoLibro1 }; // Clonación de un objeto

// console.log("\nobjetoLibro1:");
console.log(objetoLibro1);
// console.log("\nobjetoLibro2:");
console.log(objetoLibro2);
// console.log("\nobjetoLibro1 === objetoLibro2:");
console.log(objetoLibro1 === objetoLibro2);
objetoLibro2.precio = 200;
// console.log("\nobjetoLibro2:");
console.log(objetoLibro2);

console.log("\n------------------------------------------------");

const objetoLibro3 = { ...objetoLibro1, precio: 300 }; // Clona todo, pero precio se le cambia el valor
// console.log("\nobjetoLibro3:");
console.log(objetoLibro3);
// console.log("\nobjetoLibro1 === objetoLibro3:");
console.log(objetoLibro1 === objetoLibro3);

console.log("\n------------------------------------------------");

// Se clona un objeto excepto el nombre que este valor se modifica
function toUpperCaseImmutable(libro) {
    const nuevoLibro = {
        ...libro,
        nombre: libro.nombre.toUpperCase()
    };
    return nuevoLibro;
}

const objetoLibro4 = toUpperCaseImmutable(objetoLibro1);
console.log(objetoLibro1);
console.log(objetoLibro4);
console.log(objetoLibro1 === objetoLibro4);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\004-spread.js
{ nombre: 'neuromante', precio: 500 }
{ nombre: 'neuromante', precio: 500 }
false
{ nombre: 'neuromante', precio: 200 }

------------------------------------------------
{ nombre: 'neuromante', precio: 300 }
false

------------------------------------------------
{ nombre: 'neuromante', precio: 500 }
{ nombre: 'NEUROMANTE', precio: 500 }
false
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/
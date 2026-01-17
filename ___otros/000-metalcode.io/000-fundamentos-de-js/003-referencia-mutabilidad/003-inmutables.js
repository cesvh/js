function toUpperCase(libro){
    libro.nombre = libro.nombre.toUpperCase();
    return libro;
}

// Se crea un nuevo objeto
function toUpperCaseInmutable(libro){
    const nuevoLibro = {
        nombre: libro.nombre.toUpperCase(),
        precio: libro.precio
    };
    return nuevoLibro;
}

const libro1 = { nombre: "neuromante", precio: 550 };

const libro2 = toUpperCaseInmutable(libro1);

console.log(libro1);
console.log(libro2);

console.log(libro1 === libro2);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\003-inmutables.js
{ nombre: 'neuromante', precio: 550 }
{ nombre: 'NEUROMANTE', precio: 550 }
false
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

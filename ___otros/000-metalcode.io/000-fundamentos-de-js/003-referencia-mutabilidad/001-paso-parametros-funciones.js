function cambiarNombre(nombre){
    nombre = nombre + "!!!";
    console.log(`Nombre interno: ${nombre}`);
}

let nombre = "Neuromante";
cambiarNombre(nombre);
console.log(`Nombre externo: ${nombre}`);

function cambiarLibro(libro){
    libro.nombre = "Hyperion";
    console.log(`Libro interno: ${libro.nombre}`);
}

let libro = { nombre: "La Fundación"};
console.log(`Libro externo antes de cambiarLibro: ${libro.nombre}`);
cambiarLibro(libro);
console.log(`Libro externo despues de cambiarLibro: ${libro.nombre}`);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\001-paso-parametros-funciones.js
Nombre interno: Neuromante!!!
Nombre externo: Neuromante
Libro externo antes de cambiarLibro: La Fundación
Libro interno: Hyperion
Libro externo despues de cambiarLibro: Hyperion
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

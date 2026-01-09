// const noMutable = 29;
// // noMutable = 99; // Error

// let usuarioNombre = "César";
// console.log(usuarioNombre);
// usuarioNombre[1] = 3;
// console.log(usuarioNombre);
// // Para los tipos primitivos estos son inmutables, los cambios se hacen en una copia del valor cambiado

// usuarioNombre = "c35412";
// console.log(usuarioNombre);

// // NO ENTIENDO PORQUE SE DICE QUE LO ANTERIOR SON INMUTABLES

// ///////////////////////////////////////////////////////////

const objetoLibro = { nombre: "neuromante", autor: "willian"};
console.log(objetoLibro);
objetoLibro.autor = "Willian Gibson";
console.log(objetoLibro);

// Su referencia en la memoria no muta, solo muta su valor

const arregloLibro = ["neuromante", "hyperion"];
// arregloLibro = []; // Error
console.log(arregloLibro);
arregloLibro[0] = "Neuromancer";
console.log(arregloLibro);
arregloLibro.push("fundacion");
console.log(arregloLibro);

function cambiarArray(arreglo){
    arreglo.push("el problema de los 3 cuerpos");
}

cambiarArray(arregloLibro);
console.log(arregloLibro);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\002-mutables.js
{ nombre: 'neuromante', autor: 'willian' }
{ nombre: 'neuromante', autor: 'Willian Gibson' }
[ 'neuromante', 'hyperion' ]
[ 'Neuromancer', 'hyperion' ]
[ 'Neuromancer', 'hyperion', 'fundacion' ]
[
  'Neuromancer',
  'hyperion',
  'fundacion',
  'el problema de los 3 cuerpos'
]
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

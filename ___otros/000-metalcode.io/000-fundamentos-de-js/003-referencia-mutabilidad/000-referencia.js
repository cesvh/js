let number1 = 2;
let number2 = number1;
console.log(number1);
console.log(number2);

// Paso por valor por ser de tipos primitivos
// Al cambiar el valor de number2 no afecta a number1
number2 = 9;

console.log(number1);
console.log(number2);
console.log(number1 == number2);
console.log(number1 === number2);

console.log("--------------------");

// En tipos compuestos como array, objetos el paso es por referencia
// Se asigna la misma posición donde está guardada en memoria

let libros1 = {nombre: "neuromante"};
let libros2 = libros1;
console.log(libros1);
console.log(libros2);

libros2.nombre = "hyperion";

console.log(libros1);
console.log(libros2);
console.log(libros1 == libros2);
console.log(libros1 === libros2);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\000-referencia.js
2
2
2
9
false
false
--------------------
{ nombre: 'neuromante' }
{ nombre: 'neuromante' }
{ nombre: 'hyperion' }
{ nombre: 'hyperion' }
true
true
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/
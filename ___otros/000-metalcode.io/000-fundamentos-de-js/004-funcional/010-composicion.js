function showNumber(...numbers){
    for(const number of numbers){
        console.log(`Número: ${number}`);
    }
}

// showNumber(1,2,3,4,5,6);



const convertirAMayuscula = str => str.toUpperCase();
const agregarPipe = str => `-${str}-`;
const agregarPunto = str => `${str}.`;
const agregarExclamacion = str => `¡${str}!`;

console.log(convertirAMayuscula("yun tianming"));
console.log(agregarPipe(convertirAMayuscula("yun tianming")));
console.log(agregarPunto(agregarPipe(convertirAMayuscula("yun tianming"))));
console.log(agregarExclamacion(agregarPunto(agregarPipe(convertirAMayuscula("yun tianming")))));

console.log("\n");

// Todo lo anterior es fácil de comprender, cada función retorna una cadena de texto



// omposición de funciones de derecha a izquierda
const composicion = (...fns) => value => {
    let result = value;
    for(let i = fns.length - 1; i >= 0; i--){
        result = fns[i](result);
    }
    return result;
}

const transformar = composicion( agregarPunto, agregarPipe, convertirAMayuscula, agregarExclamacion );

const resTransaformar = transformar("normal");

console.log(resTransaformar);
console.log();



// Alternativa con JS moderno
const composicionModerna = (...fns) => {
  return (initialValue) => {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, initialValue);
  };
};

const transformar2 = composicionModerna( agregarPunto, agregarPipe, convertirAMayuscula, agregarExclamacion );
const resTransformar2 = transformar2("composión moderna");

console.log(resTransformar2);
console.log();



// Alternativa con JS moderno versión corta (estilo arrow functions):
const composicionModernaCorta0 = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

// composicionModernaCorta es igual que composicionModernaCorta0, pero se describe a detalle como funciona reduceRight
const composicionModernaCorta = (...fns) => // Recibe funciones como argumentos
    (value) =>  // Devuelve una función con este valor inicial
        fns.reduceRight( // Reduce de derecha a izquierda
            (acc, fn) => fn(acc) // En cada iteración la función cambia, acc va actualizándose 
        , value ); // Valor inicial para el argumento acumulador "acc"

const transformar3 = composicionModernaCorta( agregarPunto, agregarPipe, convertirAMayuscula, agregarExclamacion );
const resTransformar3 = transformar3("composición moderna corta");

console.log(resTransformar3);
console.log();

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\010-composicion.js
YUN TIANMING
-YUN TIANMING-
-YUN TIANMING-.
¡-YUN TIANMING-.!


-¡NORMAL!-.

-¡COMPOSIÓN MODERNA!-.

-¡COMPOSICIÓN MODERNA CORTA!-.

PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

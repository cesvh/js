const arrayNumeros = [299, 333, 777, 999, 666, 73, 37, 3, 2, 0];
const arrayCadena = ["Lao", "Tse", "Asimov", "Yun", "Tianming"];

console.log(`arrayNumeros.length: ${arrayNumeros.length}`);
console.log(`arrayNumeros[0]: ${arrayNumeros[0]}`);
console.log(`arrayCadena.length: ${arrayCadena.length}`);
console.log(`arrayCadena[arrayCadena.length - 1]: ${arrayCadena[arrayCadena.length - 1]}`);

console.log("arrayCadena:");
for(let i = 0; i < arrayCadena.length; i++){
    console.log(arrayCadena[i]);
}

console.log("arrayNumeros:");
for(let i = 0; i < arrayNumeros.length; i++){
    console.log(arrayNumeros[i]);
}

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\002-array\000-array.js
arrayNumeros.length: 10
arrayNumeros[0]: 299
arrayCadena.length: 5
arrayCadena[arrayCadena.length - 1]: Tianming
arrayCadena:
Lao
Tse
Asimov
Yun
Tianming
arrayNumeros:
299
333
777
999
666
73
37
3
2
0
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

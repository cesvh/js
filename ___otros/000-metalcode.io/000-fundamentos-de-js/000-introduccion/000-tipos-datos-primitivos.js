
// INTRODUCCIÓN A JS
// Tipo de datos (Primitivos)
let miCadena = "Valor string";
let miNumero = 299;
let miBoleano = true;
let miIndefinido = undefined;
let miNull = null;
let miSymbol = Symbol("mi_id");
let bigInt = BigInt(1234567890123456789012345678901234567890n);

console.log(`miCadena: ${miCadena}; typeof: ${typeof miCadena}`);
console.log(`miNumero: ${miNumero}; typeof: ${typeof miNumero}`);
console.log(`miBoleano: ${miBoleano}; typeof: ${typeof miBoleano}`);
console.log(`miIndefinido: ${miIndefinido}; typeof: ${typeof miIndefinido}`);
console.log(`miNull: ${miNull}; typeof: ${typeof miNull}`);
console.log(`miSymbol: ${miSymbol.toString()}; typeof: ${typeof miSymbol}`);
console.log(`bigInt: ${bigInt}; typeof: ${typeof bigInt}`);

/*
PS C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion> 
PS C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion> 
PS C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion> node .\000-tipos-datos-primitivos.js
miCadena: Valor string; typeof: string
miNumero: 299; typeof: number
miBoleano: true; typeof: boolean
miIndefinido: undefined; typeof: undefined
miNull: null; typeof: object
miSymbol: Symbol(mi_id); typeof: symbol
bigInt: 1234567890123456789012345678901234567890; typeof: bigint
PS C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion> 
PS C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion> 
*/
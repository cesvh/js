const sale = {
    id: 1,
    amount: 111,
    customer: {
        name: "Ana",
        data: "Uno"
    }
};

console.log("\nsale");
console.log(sale);

const saleCopy = {...sale}; // Copia las propiedades del primer nivel.

console.log("\nsaleCopy");
console.log(saleCopy);

saleCopy.amount = 222;
// Propiedades primitivas: El id y el amount son números (primitivos). Se copian por valor. Por eso, cuando cambias saleCopy.amount, el sale.amount original no se ve afectado.

saleCopy.customer.name = "Pedro";
saleCopy.customer.data = "Dos";
// Objetos anidados: La propiedad customer no es un valor simple, es una referencia a un objeto en la memoria. El operador spread copia la dirección de memoria, no el objeto en sí.

// Después de hacer la copia, tanto sale.customer como saleCopy.customer están apuntando exactamente al mismo lugar en la memoria.

console.log("\nsale");
console.log(sale);
console.log("\nsaleCopy");
console.log(saleCopy);

console.log("\nsale === saleCopy");
console.log(sale === saleCopy);
console.log("\nsale.customer === saleCopy.customer");
console.log(sale.customer === saleCopy.customer); // true porque apuntan a la misma referencia de memoria

console.log("\n------------------------------------------------");
const saleDeepCopy = structuredClone(sale); // JS moderno
// const saleDeepCopy = JSON.parse(JSON.stringify(sale)); // JS antiguo si no se usa funciones o fechas
console.log("\nsaleDeepCopy");
console.log(saleDeepCopy);

saleDeepCopy.amount = 333;
saleDeepCopy.customer.name = "María";

console.log("\nsale");
console.log(sale);
console.log("\saleDeepCopy");
console.log(saleDeepCopy);

console.log("\nsale === saleDeepCopy");
console.log(sale === saleDeepCopy);
console.log("\nsale.customer === saleDeepCopy.customer");
console.log(sale.customer === saleDeepCopy.customer); // false porque se usó structuredClone el cual fue una copia profunda

console.log();

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\007-deep-copy.js

sale
{ id: 1, amount: 111, customer: { name: 'Ana', data: 'Uno' } }

saleCopy
{ id: 1, amount: 111, customer: { name: 'Ana', data: 'Uno' } }

sale
{ id: 1, amount: 111, customer: { name: 'Pedro', data: 'Dos' } }

saleCopy
{ id: 1, amount: 222, customer: { name: 'Pedro', data: 'Dos' } }

sale === saleCopy
false

sale.customer === saleCopy.customer
true

------------------------------------------------

saleDeepCopy
{ id: 1, amount: 111, customer: { name: 'Pedro', data: 'Dos' } }

sale
{ id: 1, amount: 111, customer: { name: 'Pedro', data: 'Dos' } }
saleDeepCopy
{ id: 1, amount: 333, customer: { name: 'María', data: 'Dos' } }

sale === saleDeepCopy
false

sale.customer === saleDeepCopy.customer
false

PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

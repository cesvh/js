"use strict";
let result;
result = [1, 2, 3];
// Es necesario hacer una verificación de tipo para poder hacer uso de la variable
const total = result.reduce((a, b) => a + b, 0);
console.log(total);

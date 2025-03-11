"use strict";
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
let result = multiply(10, 20);
console.log(result);

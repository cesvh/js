"use strict";
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30));

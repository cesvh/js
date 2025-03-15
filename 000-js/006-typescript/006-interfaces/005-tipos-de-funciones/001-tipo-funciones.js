"use strict";
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true)); // HI
console.log(format('HI', false)); // hi

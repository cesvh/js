function add(x, y){
    return x + y;
}

console.log(add(2, 3));

const a = add;

console.log(a(2, 3));

const fn = function (name) {
    return `Hola ${name}`;
}

console.log(fn("César"));

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\002-funcion-primera-clase.js
5
5
Hola César
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

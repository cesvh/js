const agregarMayuscula = texto => texto.toUpperCase();
const agregarGuion = texto => `-${texto}-`;
const agregarPunto = texto => `.${texto}.`;
const agregarExclamacion = texto => `¡${texto}!`;

pipe = (...funciones) => valorInicial => {
    let resultado = valorInicial;
    for(const funcion of funciones){
        resultado = funcion(resultado);
    }
    return resultado;
};

const transformarTexto = pipe(agregarMayuscula, agregarGuion, agregarPunto, agregarExclamacion);
const textoFinal = transformarTexto("césar");

console.log();
console.log(textoFinal);
console.log();

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\011-pipe.js

¡.-CÉSAR-.!

PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

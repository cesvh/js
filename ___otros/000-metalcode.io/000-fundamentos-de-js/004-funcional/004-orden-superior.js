function add(x, y, fn){
    const result = x + y;
    fn(result);
}

function showResult(result){
    console.log(`\nshowResult: ${result}`);
}

function showResult2(result) {
    console.log(`\nshowResult2: ${result}`);
}

add(5, 10, showResult);
add(5, 10, showResult2);
add(5, 10, (result) => console.log(`\nfncAnonima: ${result}`));

function returnFunction(texto){
    return function() {
        console.log(`\nEsta es una función retornada: ${texto}`);
    }
}

const myFunction = returnFunction("Texto");
myFunction("Texto");
console.log();

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\004-orden-superior.js

showResult: 15

showResult2: 15

fncAnonima: 15

Esta es una función retornada: Texto

PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

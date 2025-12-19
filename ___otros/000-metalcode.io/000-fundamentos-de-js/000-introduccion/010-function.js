function fncBasico(){
    console.log("fncBasico");
}

function fncParametroBasico(miTexto){
    console.log(miTexto);
}

function fncReturn(miTexto){
    return `miTexto: ${miTexto}`;
}

fncBasico();
fncParametroBasico("fncParametroBasico");

const miTexto = fncReturn("fncReturn");
console.log(miTexto);

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion\010-function.js
fncBasico
fncParametroBasico
miTexto: fncReturn
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

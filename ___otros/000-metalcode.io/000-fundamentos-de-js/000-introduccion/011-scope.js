let miNumero = 999;

if(true){
    let miNumero = 555;
    console.log("##### if ####")
    console.log(miNumero);
}

console.log("##### FUERA ####")
console.log(miNumero);

miFunction();

console.log("##### FUERA ####")
console.log(miNumero);

function miFunction(){
    let miNumero = 444;
    console.log("##### function miFunction() ####")
    console.log(miNumero);
}

/*
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> node C:\Users\cesvh\dev\github\js\___otros\000-metalcode.io\000-fundamentos-de-js\000-introduccion\011-scope.js   
##### if ####
555
##### FUERA ####
999
##### function miFunction() ####
444
##### FUERA ####
999
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
PS C:\Users\cesvh\dev\github\js> 
*/

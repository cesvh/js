// Función de orden superior que puede mantener su estado
function closure(name){
    let count = 0;

    // Recibe o retorna una función
    return function(){
        count++;
        console.log(`${name} ejecutando: ${count} veces`);
    }
}

const c1 = closure("closure 1");
c1();
c1();
c1();
c1();
c1();

const c2 = closure("closure 2");
c2();
c2();
c2();
c2();
c2();

c1();
c1();

c2();
c2();

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\006-closure.js
closure 1 ejecutando: 1 veces
closure 1 ejecutando: 2 veces
closure 1 ejecutando: 3 veces
closure 1 ejecutando: 4 veces
closure 1 ejecutando: 5 veces
closure 2 ejecutando: 1 veces
closure 2 ejecutando: 2 veces
closure 2 ejecutando: 3 veces
closure 2 ejecutando: 4 veces
closure 2 ejecutando: 5 veces
closure 1 ejecutando: 6 veces
closure 1 ejecutando: 7 veces
closure 2 ejecutando: 6 veces
closure 2 ejecutando: 7 veces
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

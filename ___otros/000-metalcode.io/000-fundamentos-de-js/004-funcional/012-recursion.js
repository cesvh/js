const numeros = [2, 3, 7, 9, 5, 6];

function Cubo(miArreglo, indice = 0){
    if(miArreglo.length <= indice){
        return;
    }
    console.log(miArreglo[indice]);
    Cubo(miArreglo, (indice + 1));
}

Cubo(numeros);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\012-recursion.js
2
3
7
9
5
6
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

// Asincrono: tareas que se ejecutan en segundo plano y ejecutar otra tarea a la par
const fs = require('fs');

fs.readFile('./datas/books.txt', 'utf-8', (erro, data) => {
    if(erro){
        console.log("--------------------------------------erro");
        console.log(erro);
    } else {
        console.log("--------------------------------------data");
        console.log(data);
    }
});
console.log("--------------------------------------$");
console.log("Soy la última linea");

/*

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\002-async>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\002-async> node .\001-readFile.js
--------------------------------------$
Soy la última linea
--------------------------------------data
el problema de los 3 cuerpos
el bosque oscuro

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\002-async>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\002-async>

*/

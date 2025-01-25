// Asincrono: tareas que se ejecutan en segundo plano y ejecutar otra tarea a la par
const fs = require('fs');

fs.readFile('./datas/books.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("Soy la última linea");

/*

PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-async> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-async> cat .\datas\books.txt 
el problema de los 3 cuerpos
el bosque oscuro
el fin de la muerte
la redención del tiempo
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-async> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-async> node .\index.js
Soy la última linea
el problema de los 3 cuerpos
el bosque oscuro
el fin de la muerte
la redención del tiempo

PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-async> 

*/

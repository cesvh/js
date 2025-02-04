const { readFile } = require('fs');

// Código asíncrono: Se ejecuta en segundo plano
const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            }
            resolve(data);
        });
    });
};

// async: especifica que dentro tiene código asíncrono
const readText = async () => {
    try{
        // await: especifica que espera una promesa
        const result1 = await getText('./datas/autors.txt');
        const result2 = await getText('./datas/books.txt');
        const result3 = await getText('./datas/topics.txt');
        console.log(result1);
        console.log(result2);
        console.log(result3);
    } catch(error){
        throw new Error("Error inesperado");
        console.log(error);
    }
};

readText();

/*

PS C:\Users\cesvh\dev\github\js\node\007-promises\002-async-await>
PS C:\Users\cesvh\dev\github\js\node\007-promises\002-async-await>
PS C:\Users\cesvh\dev\github\js\node\007-promises\002-async-await> node .\index.js
Cixin Liu
Isaac Asimov

El problema de los 3 cuerpos
El bosque oscuro

sci-fi
cyberpunk

PS C:\Users\cesvh\dev\github\js\node\007-promises\002-async-await>
PS C:\Users\cesvh\dev\github\js\node\007-promises\002-async-await>

*/

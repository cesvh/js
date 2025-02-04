const { readFile } = require('fs/promises');

const readText = async () => {
    try{
        const result1 = await readFile('./datas/autors.txt', 'utf-8');
        const result2 = await readFile('./datas/books.txt', 'utf-8');
        const result3 = await readFile('./datas/topics.txt', 'utf-8');
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

PS C:\Users\cesvh\dev\github\js\node\007-promises\004-fs-promises>
PS C:\Users\cesvh\dev\github\js\node\007-promises\004-fs-promises> node .\index.js
Cixin Liu
Isaac Asimov

El problema de los 3 cuerpos
El bosque oscuro

sci-fi
cyberpunk

PS C:\Users\cesvh\dev\github\js\node\007-promises\004-fs-promises>
PS C:\Users\cesvh\dev\github\js\node\007-promises\004-fs-promises>

*/

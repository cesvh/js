const { readFile } = require('fs');
const { promisify } = require('util');

const getText = promisify(readFile);

const readText = async () => {
    try{
        const result1 = await getText('./datas/autors.txt', 'utf-8');
        const result2 = await getText('./datas/books.txt', 'utf-8');
        const result3 = await getText('./datas/topics.txt', 'utf-8');
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

PS C:\Users\cesvh\dev\github\js\node\007-promises\003-promisify>
PS C:\Users\cesvh\dev\github\js\node\007-promises\003-promisify>
PS C:\Users\cesvh\dev\github\js\node\007-promises\003-promisify> node .\index.js
Cixin Liu
Isaac Asimov

El problema de los 3 cuerpos
El bosque oscuro

sci-fi
cyberpunk

PS C:\Users\cesvh\dev\github\js\node\007-promises\003-promisify>
PS C:\Users\cesvh\dev\github\js\node\007-promises\003-promisify>

*/

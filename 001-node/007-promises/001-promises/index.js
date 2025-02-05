const { readFile } = require('fs');

const getText = (pathFile) => {
    // Mejora de asíncronismo (Evitar problemas de callbacks)
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            }
            resolve(data);
        });
    });
};

getText('./datas/autors.txt')
    .then((autors) => { console.log(autors); })
    .then(() => { return getText('./datas/books.txt'); })
    .then((books) => { console.log(books); })
    .then(() => { return getText('./datas/topics.txt'); })
    .then((topics) => { return console.log(topics); })
    .catch(err => { console.log(err); });

console.log("1 - ");
console.log("2 - ");
console.log("");

/*

PS C:\Users\cesvh\dev\github\js\node\007-promises\001-promises>
PS C:\Users\cesvh\dev\github\js\node\007-promises\001-promises> node .\index.js
1 -
2 -

Cixin Liu
Isaac Asimov

El problema de los 3 cuerpos
El bosque oscuro

sci-fi
cyberpunk

PS C:\Users\cesvh\dev\github\js\node\007-promises\001-promises>
PS C:\Users\cesvh\dev\github\js\node\007-promises\001-promises>

*/

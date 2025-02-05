const fs = require('fs');

const books = fs.readFileSync('./datas/books.txt', 'utf-8');
const autors = fs.readFileSync('./datas/autors.txt');

//console.log("--------------------------------------books");
console.log(books);
//console.log("--------------------------------------autors");
console.log(autors);
//console.log("--------------------------------------autors.toString()");
console.log(autors.toString());

/*

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync> node .\001-readFileSync.js
--------------------------------------books
El problema de los 3 cuerpos
El bosque oscuro

--------------------------------------autors
<Buffer 43 69 78 69 6e 20 4c 69 75 0d 0a 52 6f 62 65 72 74 6f 20 4c 6c 69 6e c3 a1 73 0d 0a>
--------------------------------------autors.toString()
Cixin Liu
Roberto Llinás

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>

*/

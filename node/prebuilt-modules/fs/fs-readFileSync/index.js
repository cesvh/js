const fs = require("fs");

const autors = fs.readFileSync("datas/autors.txt", "utf8");
const books = fs.readFileSync("datas/books.txt");

console.log(autors);
console.log(books);
console.log(books.toString());

/*
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-readFileSync> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-readFileSync> node .\index.js
Cixin Liu
Isaac Asimov
Roberto Llinás

<Buffer 45 6c 20 70 72 6f 62 6c 65 6d 61 20 64 65 20 6c 6f 73 20 33 20 63 75 65 72 70 6f 73 0d 0a 53 69 6e 73 61 6a 6f 0d 0a 45 6c 20 62 6f 73 71 75 65 20 6f ... 7 more bytes>
El problema de los 3 cuerpos
Sinsajo
El bosque oscuro

PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-readFileSync> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-readFileSync> 
*/

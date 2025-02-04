import datas, { addition } from './myModules/myModules.js'; // Exportar módulos con ES6

console.log("--------------------------------------user");
console.log(datas);
console.log("--------------------------------------datas.books[0]");
console.log(datas.books[0]);
console.log("--------------------------------------addition");
console.log(addition(5, 5));

/*

PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import>
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import\package.json:

{
  "name": "004-export-default-import",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import>
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import> node .\index.js
--------------------------------------user
{
  user: { name: 'cesar', user: 'cesvh' },
  books: [
    'El problema de los 3 cuerpos',
    'El Bosque Obscuro',
    'El fin de la muerte'
  ]
}
--------------------------------------datas.books[0]
El problema de los 3 cuerpos
--------------------------------------addition
10
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import>
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import>
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules\004-export-default-import>
*/

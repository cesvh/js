const datas = require("./my-modules/datas.js"); // Obtiene el objeto exports

// console.log("--------------------------------------datas");
console.log(datas);
// console.log("--------------------------------------datas.user");
console.log(datas.user);
// console.log("--------------------------------------datas.user.name");
console.log(datas.user.name);
// console.log("--------------------------------------atas.books");
console.log(datas.books);
// console.log("--------------------------------------atas.books[0]");
console.log(datas.books[0]);
// console.log("--------------------------------------datas.addition(5, 5)");
console.log(datas.addition(5, 5));

/*

PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules> 
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules> node .\001-exports-obj-require\index.js
--------------------------------------datas
{
  user: { name: 'cesar', user: 'cesvh' },
  books: [
    'El problema de los 3 cuerpos',
    'El Bosque Obscuro',
    'El fin de la muerte'
  ],
  addition: [Function: addition]
}
--------------------------------------datas.user
{ name: 'cesar', user: 'cesvh' }
--------------------------------------datas.user.name
cesar
--------------------------------------atas.books
[
  'El problema de los 3 cuerpos',
  'El Bosque Obscuro',
  'El fin de la muerte'
]
--------------------------------------atas.books[0]
El problema de los 3 cuerpos
--------------------------------------datas.addition(5, 5)
10
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules> 
PS C:\Users\cesvh\dev\github\js\node\003-commonjs-modules> 

*/

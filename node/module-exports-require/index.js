const datas = require("./my-modules/datas.js");

console.log(datas);
console.log(datas.user);
console.log(datas.user.name);
console.log(datas.books);
console.log(datas.addition(5, 5));

/*
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
PS C:\Users\cesvh\dev\github\js\node\module-exports-require> node .\index.js
{
  user: { name: 'cesar', user: 'cesvh' },
  books: [
    'El problema de los 3 cuerpos',
    'El Bosque Obscuro',
    'El fin de la muerte'
  ],
  addition: [Function: addition]
}
{ name: 'cesar', user: 'cesvh' }
cesar
[
  'El problema de los 3 cuerpos',
  'El Bosque Obscuro',
  'El fin de la muerte'
]
10
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
PS C:\Users\cesvh\dev\github\js\node\module-exports-require>
*/

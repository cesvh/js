const user = {
    "name": "cesar",
    "user": "cesvh",
};

const books = [
    'El problema de los 3 cuerpos',
    'El Bosque Obscuro',
    'El fin de la muerte'
];

const addition = (num1, num2) => { return num1 + num2};

// console.log("--------------------------------------exports");
// console.log(exports);

module.exports.user = user;
module.exports.books = books;
module.exports.addition = addition;

// console.log("--------------------------------------module");
// console.log(module);
// console.log("--------------------------------------exports");
// console.log(exports);

/*

PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node .\node\003-commonjs-modules\002-module-exports-obj-require\my-modules\datas.js
--------------------------------------exports
{}
--------------------------------------module
{
  id: '.',
  path: 'C:\\Users\\cesvh\\dev\\github\\js\\node\\003-commonjs-modules\\002-module-exports-obj-require\\my-modules',
  exports: {
    user: { name: 'cesar', user: 'cesvh' },
    books: [
      'El problema de los 3 cuerpos',
      'El Bosque Obscuro',
      'El fin de la muerte'
    ],
    addition: [Function: addition]
  },
  filename: 'C:\\Users\\cesvh\\dev\\github\\js\\node\\003-commonjs-modules\\002-module-exports-obj-require\\my-modules\\datas.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\cesvh\\dev\\github\\js\\node\\003-commonjs-modules\\002-module-exports-obj-require\\my-modules\\node_modules',
    'C:\\Users\\cesvh\\dev\\github\\js\\node\\003-commonjs-modules\\002-module-exports-obj-require\\node_modules',
    'C:\\Users\\cesvh\\dev\\github\\js\\node\\003-commonjs-modules\\node_modules',
    'C:\\Users\\cesvh\\dev\\github\\js\\node\\node_modules',
    'C:\\Users\\cesvh\\dev\\github\\js\\node_modules',
    'C:\\Users\\cesvh\\dev\\github\\node_modules',
    'C:\\Users\\cesvh\\dev\\node_modules',
    'C:\\Users\\cesvh\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
--------------------------------------exports
{
  user: { name: 'cesar', user: 'cesvh' },
  books: [
    'El problema de los 3 cuerpos',
    'El Bosque Obscuro',
    'El fin de la muerte'
  ],
  addition: [Function: addition]
}
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>

*/

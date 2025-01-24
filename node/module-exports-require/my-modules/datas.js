const dataObject = {};

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

dataObject.user = user;
dataObject.books = books;
dataObject.addition = addition;

module.exports = dataObject;

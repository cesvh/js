"use strict";
// Tras definir la interfaz Person, puede usarse como tipo. Por ejemplo, se puede anotar el parámetro de función con el nombre de la interfaz:
// function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`;
// }
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
// La función getFullName() aceptará cualquier objeto que tenga al menos dos propiedades de cadena con el nombre firstName y lastName.
let cesar = {
    firstName: 'César',
    lastName: 'Vega',
    year: 1991
};
console.log(getFullName(cesar)); // César Vega

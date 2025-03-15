"use strict";
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'César',
    lastName: 'Vega'
};
console.log(getFullName(person)); // César Vega

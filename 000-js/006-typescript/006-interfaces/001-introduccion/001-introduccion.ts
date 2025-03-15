function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'César',
    lastName: 'Vega'
};

console.log(getFullName(person)); // César Vega

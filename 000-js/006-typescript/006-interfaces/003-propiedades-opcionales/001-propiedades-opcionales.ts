interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

const person1 = {
    firstName: 'César',
    middleName: 'cesvh',
    lastName: 'Vega'
};

console.log(getFullName(person1)); // César cesvh Vega
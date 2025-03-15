interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;
}

let person: Person;
person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe',
};

// Error: Cannot assign to 'ssn' because it is a read-only property.
// person.ssn = '171-28-0927'; // Error
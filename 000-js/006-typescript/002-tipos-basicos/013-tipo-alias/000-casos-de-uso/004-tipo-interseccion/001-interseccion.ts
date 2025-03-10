type Personal = {
    name: string;
    age: number;
};

type Contact = {
    email: string;
    phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
    name: "cesvh",
    age: 1991,
    email: "cesar@c.x",
    phone: "(000)-123-4567"
};

console.log(`Candidato: ${candidate.name}, ${candidate.age}, ${candidate.email}, ${candidate.phone}`);

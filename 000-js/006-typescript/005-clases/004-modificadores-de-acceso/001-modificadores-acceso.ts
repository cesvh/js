class Persona {
    private clave: string;
    private nombre: string;
    private usuario: string;
    public team: string;
    protected myNumber: number;

    constructor(clave: string, nombre: string, usuario: string, team: string, myNumber: number) {
        this.clave = clave;
        this.nombre = nombre;
        this.usuario = usuario;
        this.team = team;
        this.myNumber = myNumber;
    }

    obtenerDatos(): string {
        return `${this.clave}: ${this.nombre} ${this.usuario} - ${this.team} - ${this.myNumber}`;
    }
}

let persona = new Persona('153-07-3130', 'John', 'Doe', 'Desarrollo', 2);
console.log(persona.obtenerDatos());
console.log(persona.team);

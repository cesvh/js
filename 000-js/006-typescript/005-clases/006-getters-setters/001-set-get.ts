class Persona {
    private _edad: number;
    private _nombre: string;
    private _apellido: string;

    constructor(edad: number, nombre: string, apellido: string) {
        this._edad = edad;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    public get edad() {
        return this._edad;
    }

    public set edad(laEdad: number) {
        if (laEdad <= 0 || laEdad >= 200) {
            throw new Error('La edad es inválido');
        }
        this._edad = laEdad;
    }

    public get nombre() {
        return this._nombre;
    }

    public set nombre(elNombre: string) {
        if (!elNombre) {
            throw new Error('Nombre inválido.');
        }
        this._nombre = elNombre;
    }

    public get apellido() {
        return this._apellido;
    }

    public set apellido(elApellido: string) {
        if (!elApellido) {
            throw new Error('Apellido inválido.');
        }
        this._apellido = elApellido;
    }

    public get nombreCompleto() {
        return `${this.nombre} ${this.apellido} (${this.edad})`;
    }

    public set nombreCompleto(nombre: string) {
        let partes = nombre.split(' ');
        if (partes.length != 2) {
            throw new Error('Formato del conmbre inválido: Nombre Apellido');
        }
        this.nombre = partes[0];
        this.apellido = partes[1];
    }
}

let persona = new Persona(18, 'cesar', 'vega');
console.log(persona.nombreCompleto); // cesar vega (18)
persona.edad = 34;
persona.nombre = 'Cesar';
persona.apellido = 'Vega';
console.log(persona.nombreCompleto); // Cesar Vega (34)
persona.nombreCompleto = 'César Vega';
console.log(persona.nombreCompleto); // César Vega (34)

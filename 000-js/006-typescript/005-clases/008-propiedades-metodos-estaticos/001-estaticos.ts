class Empleado {
    // Si se quita el modificador de acceso private, se puede acceder a la propiedad en todas las instancias de la clase
    private static cantidadDeEmpleados: number = 0;

    constructor(
        private nombre: string,
        private apellido: string,
        private puesto: string) {

        Empleado.cantidadDeEmpleados++;
    }

    // Las propiedades y métodos estáticos son compartidos por todas las instancias de la clase
    public static getHeadcount() {
        return Empleado.cantidadDeEmpleados;
    }
}

let ces = new Empleado('ces', '', 'Full Stack Developer');
let cesar = new Empleado('ces', 'vh', 'Front-end Developer');
let cesarVega = new Empleado('César', 'Vega', 'Back-end Developer');

// console.log(Empleado.cantidadDeEmpleados); // cantidadDeEmpleados: number = 0; // public
console.log(Empleado.getHeadcount());

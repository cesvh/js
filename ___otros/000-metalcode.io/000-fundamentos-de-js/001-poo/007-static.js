class Usuario {
    static totalUsuarios = 0;

    constructor(usuarioNombre, usuarioEdad){
        this.usuarioNombre = usuarioNombre;
        this.usuarioEdad = usuarioEdad;
    }

    crearUsuario(){
        console.log(`Usuario creado: ${this.usuarioNombre} - ${this.usuarioEdad}`);
        // this.totalUsuarios++; //NO ES POSIBLE
        // console.log(this.totalUsuarios); //NO ES POSIBLE
        Usuario.totalUsuarios++;
    }

    static crearUsuarioNormal(usuarioNormalX, usuarioEdadX){
        const usuarioNormal = new Usuario(`${usuarioNormalX}${Usuario.totalUsuarios+1}`, usuarioEdadX);
        usuarioNormal.crearUsuario();
        console.log(`Usuario Normal creado número: ${Usuario.totalUsuarios}`);
    }
}

const usuarioAdmin1 = new Usuario("César", 1991);
console.log(usuarioAdmin1);
console.log(`${usuarioAdmin1.usuarioNombre}`);
console.log(`${usuarioAdmin1.usuarioEdad}`);
usuarioAdmin1.crearUsuario();
console.log(Usuario.totalUsuarios);

const usuarioAdmin2 = new Usuario("Ángel", 1990);
console.log(usuarioAdmin2);
console.log(`${usuarioAdmin2.usuarioNombre}`);
console.log(`${usuarioAdmin2.usuarioEdad}`);
usuarioAdmin2.crearUsuario();
console.log(Usuario.totalUsuarios);

Usuario.crearUsuarioNormal("usuarioNormal", 2000);
Usuario.crearUsuarioNormal("usuarioNormal", 2000);
Usuario.crearUsuarioNormal("usuarioNormal", 2000);

// console.log(usuarioAdmin1.totalUsuarios); // NO ES POSIBLE
/*
1
Usuario { usuarioNombre: 'Ángel', usuarioEdad: 1990 }
Ángel
1990
Usuario creado: Ángel - 1990
2
Usuario creado: usuarioNormal3 - 2000
Usuario Normal creado número: 3
Usuario creado: usuarioNormal4 - 2000
Usuario Normal creado número: 4
Usuario creado: usuarioNormal5 - 2000
Usuario Normal creado número: 5
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

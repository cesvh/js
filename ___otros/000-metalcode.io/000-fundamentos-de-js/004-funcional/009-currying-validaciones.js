const validarEdad = edadNinio => edadAdultoMayor => edad => {
    if(edad < edadNinio){
        return "Niño";
    } else if(edad >= edadAdultoMayor){
        return "Adulto mayor";
    }
    return "Adulto";
};

console.log(validarEdad(18)(65)(12));

const validacion = validarEdad(18)(65);

console.log(validacion(13));
console.log(validacion(32));
console.log(validacion(90));

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\009-currying-validaciones.js
Niño
Niño
Adulto
Adulto mayor
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

class Libros{
    #libros;

    constructor(){
        this.#libros = [];
    }

    agregarLibros(libro){
        this.#libros.push(libro);
    }

    obtenerLibros(){
        return this.#libros;
    }
}

const objetoLibro = new Libros();
objetoLibro.agregarLibros({ titulo: "Neuromancer", autor: "William Gibson" });
objetoLibro.agregarLibros({ titulo: "Fundación", autor: "Isaac Asimov" });
objetoLibro.agregarLibros({ titulo: "Snow Crash", autor: "Neal Stephenson" });
objetoLibro.agregarLibros({ titulo: "Hyperion", autor: "Dan Simmons" });

const libros = objetoLibro.obtenerLibros();

console.log(libros);

for(const item of libros){
    console.log(`${item.titulo} - ${item.autor}`);
}

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\002-array\008-objetos-con-array.js
[
  { titulo: 'Neuromancer', autor: 'William Gibson' },
  { titulo: 'Fundación', autor: 'Isaac Asimov' },
  { titulo: 'Snow Crash', autor: 'Neal Stephenson' },
  { titulo: 'Hyperion', autor: 'Dan Simmons' }
]
Neuromancer - William Gibson
Fundación - Isaac Asimov
Snow Crash - Neal Stephenson
Hyperion - Dan Simmons
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

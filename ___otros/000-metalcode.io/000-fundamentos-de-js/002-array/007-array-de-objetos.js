const librosCienciaFiccion = [
    {
        id: 1,
        titulo: "Neuromancer",
        autor: "William Gibson",
    },
    {
        id: 2,
        titulo: "Fundación",
        autor: "Isaac Asimov",
    },
    {
        id: 3,
        titulo: "Snow Crash",
        autor: "Neal Stephenson",
    },
    {
        id: 4,
        titulo: "Hyperion",
        autor: "Dan Simmons",
    },
];

console.log(`librosCienciaFiccion`);
console.log(librosCienciaFiccion);

console.log(librosCienciaFiccion[0].titulo);
console.log(librosCienciaFiccion[1].titulo);
console.log(librosCienciaFiccion[2].autor);

for(item1 of librosCienciaFiccion){
    console.log(`${item1.id}-${item1.titulo}-${item1.autor}`);
}

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\002-array\007-array-de-objetos.js
librosCienciaFiccion
[
  { id: 1, titulo: 'Neuromancer', autor: 'William Gibson' },
  { id: 2, titulo: 'Fundación', autor: 'Isaac Asimov' },
  { id: 3, titulo: 'Snow Crash', autor: 'Neal Stephenson' },
  { id: 4, titulo: 'Hyperion', autor: 'Dan Simmons' }
]
Neuromancer
Fundación
Neal Stephenson
1-Neuromancer-William Gibson
2-Fundación-Isaac Asimov
3-Snow Crash-Neal Stephenson
4-Hyperion-Dan Simmons
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/
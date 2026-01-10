const beer = { name: "Corona", price: 1.5, type: "lager" };
const brewery = { name: "Grupo Modelo", country: "México" };
const brewery2 = { type: "test" };

const beerWithBrewery = { ...brewery, ...beer };

console.log(beer);
console.log(brewery);
console.log(beerWithBrewery);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\006-spread-in-objects.js
{ name: 'Corona', price: 1.5, type: 'lager' }
{ name: 'Grupo Modelo', country: 'México' }
{ name: 'Corona', country: 'México', price: 1.5, type: 'lager' }
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

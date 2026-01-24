const miNumero = [1, 3, 5, 7, 9];

function mapPersonalizado(miArray, miFuncion){
    const arrayFinal = [];
    for(let indice = 0; indice < miArray.length; indice++){
        const elemento = miFuncion(miArray[indice]);
        arrayFinal.push(elemento);
    }
    return arrayFinal;
}

const nuevoArray = mapPersonalizado(miNumero, num => num ** 3);
console.log();
console.log(miNumero);
console.log(nuevoArray);
console.log();

const arrayCuadrado = miNumero.map((elemento, indice, array) => {
    console.log(elemento);
    console.log(indice);
    console.log(array);
    return elemento * 2;
});
console.log(arrayCuadrado);
console.log();
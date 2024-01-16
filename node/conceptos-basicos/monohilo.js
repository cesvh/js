console.log("La época de planck");

let i = 0;
setInterval(function() {
    console.log(i);
    i++;
    if(i === 5){
        console.log("Forzamos el error");
        let a = i + z;
    }
}, 1000);

console.log("The last question");

/*
El hecho de que JavaScript (y por ende Node) sea monohilo es que a la hora de ocurrir un error va a detener toda la ejecución del código.
*/

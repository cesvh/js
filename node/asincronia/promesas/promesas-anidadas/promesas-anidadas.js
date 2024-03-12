function myFunction(number) {
    return new Promise((resolve, reject) => {
        if (number == 5) {
            console.log(`number == 5`);
            resolve();
        } else {
            reject("A error in myFunction");
        }
    });
}

function anotherFunction(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("5 sec. Hello in anotherFunction " + name);
        }, 5000);
        resolve();
    });
}

/* Llamamos a la promesa myFunction y anidamos a la promesa anotherFunction */
myFunction(5)
.then(anotherFunction("Sebastian"))
.then(anotherFunction("Carlos"))
.then(() => console.log("End"))
.catch((err) => console.error(err));

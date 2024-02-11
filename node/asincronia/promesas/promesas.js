function myFunction(number) {
    return new Promise((resolve, reject) => {
        if (number == 5) {
            resolve();
        } else {
            reject("An error has occurred");
        }
    });
}

myFunction(5)
  .then(() => console.log("5"))
  .catch((err) => console.error(`${err} - 5`));


myFunction(0)
  .then(() => console.log("5"))
  .catch((err) => console.error(`${err} - "0"`));

myFunction("5")
  .then(() => console.log("\"5\""))
  .catch((err) => console.error(`${err} - "5"`));

myFunction("c")
  .then(() => console.log("c"))
  .catch((err) => console.error(`${err} - "c"`));

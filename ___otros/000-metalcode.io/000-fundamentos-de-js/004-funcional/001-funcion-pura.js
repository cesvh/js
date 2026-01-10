function addRandom(a){
    return a + Math.random();
}

function addPureFunction(a, b) {
    return a + b;
}

console.log(addRandom(2));
console.log(addRandom(2));

console.log(addPureFunction(2, 3));
console.log(addPureFunction(2, 3));

const r = Math.random();
console.log(addPureFunction(1, r));
console.log(addPureFunction(1, r));

const numbers = [1, 2, 3, 4, 5];

function addNumber(arr, number){
    arr.push(number);
}

function addNumberPureFunction(arr, number){
    return [...arr, number];
}

console.log(numbers);
addNumber(numbers, 6);
addNumber(numbers, 9);
console.log(numbers);
console.log(`${numbers}`);

const numbers2 = addNumberPureFunction(numbers, 6);
console.log(numbers2);
console.log(numbers);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\001-funcion-pura.js
2.675819684844715
2.78242896261441
5
5
1.0134062050517743
1.0134062050517743
[ 1, 2, 3, 4, 5 ]
[
  1, 2, 3, 4,
  5, 6, 9
]
1,2,3,4,5,6,9
[
  1, 2, 3, 4,
  5, 6, 9, 6
]
[
  1, 2, 3, 4,
  5, 6, 9
]
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

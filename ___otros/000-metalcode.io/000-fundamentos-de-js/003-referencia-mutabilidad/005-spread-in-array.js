const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [...numbers1];

numbers3.push(7);

const numbers4 = [...numbers1, ...numbers2];
const numbers5 = [0, ...numbers1, 150, ...numbers2, 123, ...numbers3];

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log("-----");
console.log(numbers5);
console.log("-----");

for(const item of numbers5){
    console.log(item);
}

console.log("-----");

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\003-referencia-mutabilidad\005-spread-in-array.js
[ 1, 2, 3 ]
[ 4, 5, 6 ]
[ 1, 2, 3, 7 ]
[ 1, 2, 3, 4, 5, 6 ]
-----
[
  0, 1,   2, 3, 150, 4,
  5, 6, 123, 1,   2, 3,
  7
]
-----
0
1
2
3
150
4
5
6
123
1
2
3
7
-----
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

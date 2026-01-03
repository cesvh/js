const arrays = [
    ["español 1", "literatura 1", "matemáticas 1"],
    ["español 2", "literatura 2", "matemáticas 2"],
    ["español 3", "literatura 3", "matemáticas 3"],
    ["español 4", "literatura 4", "matemáticas 4"],
];

console.log(`arrays:`);
console.log(arrays);

let item1Index = 0;

for(const item1 of arrays){
    console.log(`${item1Index}:`);
    console.log(item1);
    item1Index++;
}

for(const item2 of arrays){
    for(const item3 of item2){
        console.log(item3);
    }
}

arrays[0].push("historia 1");
arrays[1].push("historia 2");

console.log(`arrays:`);
console.log(arrays);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\002-array\006-bidimensional.js
arrays:
[
  [ 'español 1', 'literatura 1', 'matemáticas 1' ],
  [ 'español 2', 'literatura 2', 'matemáticas 2' ],
  [ 'español 3', 'literatura 3', 'matemáticas 3' ],
  [ 'español 4', 'literatura 4', 'matemáticas 4' ]
]
0:
[ 'español 1', 'literatura 1', 'matemáticas 1' ]
1:
[ 'español 2', 'literatura 2', 'matemáticas 2' ]
2:
[ 'español 3', 'literatura 3', 'matemáticas 3' ]
3:
[ 'español 4', 'literatura 4', 'matemáticas 4' ]
español 1
literatura 1
matemáticas 1
español 2
literatura 2
matemáticas 2
español 3
literatura 3
matemáticas 3
español 4
literatura 4
matemáticas 4
arrays:
[
  [ 'español 1', 'literatura 1', 'matemáticas 1', 'historia 1' ],
  [ 'español 2', 'literatura 2', 'matemáticas 2', 'historia 2' ],
  [ 'español 3', 'literatura 3', 'matemáticas 3' ],
  [ 'español 4', 'literatura 4', 'matemáticas 4' ]
]
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

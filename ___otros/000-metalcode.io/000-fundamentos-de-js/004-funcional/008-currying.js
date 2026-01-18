function add(a){
    return (b)=>{
        return a + b;
    }
}

// console.log(add(5));
// console.log(add(5, 2));
console.log(add(5)(2));

const sum = a => b => a + b;
console.log(sum(5)(10));

const sum5 = sum(5);
console.log(sum5(20));
console.log(sum5(30));

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\004-funcional\008-currying.js
7
15
25
35
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/

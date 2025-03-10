function add(a: number | string, b: number | string) :  number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

let sumaConcatenar: number | string = add(299792, 0.458);
console.log(sumaConcatenar);

let suma1: (x: number, y: number) => number;

suma1 = function (x: number, y: number) {
    return x + y;
};

console.log(suma1(10, 20));


let suma2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

console.log(suma2(10, 20));

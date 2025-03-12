function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log(add(10, 20));
console.log(add('Hello, ', 'world!'));


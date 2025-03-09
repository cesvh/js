let result: unknown;
result = [1,2,3];

// Es necesario hacer una verificación de tipo para poder hacer uso de la variable
const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total);

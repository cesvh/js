// Usar cuando no debe retornar nada, como en una función que solo imprime algo en consola
function logger(message: string): void {
    console.log(message);
} // No retorna nada
logger('Hello World!'); // Hello World!
// void es un tipo de dato que representa la ausencia de tipo, es decir, no tiene ningún tipo de dato

/**
 * Tipos básicos de JavaScript
 * number
 * string
 * boolean
 * null
 * undefined
 * funtion
 * object: array
 * 
 * Tipos básicos de TypeScript
 * any // No usarlo jamás
 * unknown
 * array
 * tuple
 * enum
 * 
 * Tipos inferidos
 */

let myNumbers: number = 299;
let myString: string = "luz";
let myBoolean: boolean = true;
let myWords: string[] = ["luz", "sol", "luna"];
let myArrayNumbers: number[] = [1, 2, 3, 4, 5];
let myArray: Array<number> = [1, 2, 3, 4, 5];
let myArrayBoolean: boolean[] = [true, false, true];
let myWordsUpperCase = myWords.map( word => word.toUpperCase()); // Autocompleta de acuerdo al tipo de dato
let myTuple: [number,string[]] = [1, ["luz", "sol", "luna"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";

// Pascal Case
// enum MyEnum { Chica, Mediana, Grande, ExtraGrande }; // Inicia con 0
// enum MyEnum { Chica = 10, Mediana, Grande, ExtraGrande }; // Inicia con 10
enum MyEnum { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" };
// MyEnum: Cear un patrón IFEE ""Inmediatly Invoked Function Expression"" que es una función que se ejecuta inmediatamente después de ser definida.

// console.log(MyEnum)
// console.log(MyEnum.Mediana);

const enum LeyendoEstado { Idle, Loading, Success, Error }; // Sin el const crea código js
const estado = LeyendoEstado.Success;

// console.log(LeyendoEstado); // Sin elconst en enum LeyeendoEstado no podemos acceder a la variable y falla al ejecutar ts-node filename.ts
console.log(estado);
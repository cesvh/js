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
var myNumbers = 299;
var myString = "luz";
var myBoolean = true;
var myWords = ["luz", "sol", "luna"];
var myArrayNumbers = [1, 2, 3, 4, 5];
var myArray = [1, 2, 3, 4, 5];
var myArrayBoolean = [true, false, true];
var myWordsUpperCase = myWords.map(function (word) { return word.toUpperCase(); }); // Autocompleta de acuerdo al tipo de dato
var myTuple = [1, ["luz", "sol", "luna"]];
var chica = "s";
var mediana = "m";
var grande = "l";
var extraGrande = "xl";
// Pascal Case
// enum MyEnum { Chica, Mediana, Grande, ExtraGrande }; // Inicia con 0
// enum MyEnum { Chica = 10, Mediana, Grande, ExtraGrande }; // Inicia con 10
var MyEnum;
(function (MyEnum) {
    MyEnum["Chica"] = "s";
    MyEnum["Mediana"] = "m";
    MyEnum["Grande"] = "l";
    MyEnum["ExtraGrande"] = "xl";
})(MyEnum || (MyEnum = {}));
;
; // Sin el const crea código js
var estado = 2 /* LeyendoEstado.Success */;
// console.log(LeyendoEstado); // Sin elconst en enum LeyeendoEstado no podemos acceder a la variable y falla al ejecutar ts-node filename.ts
console.log(estado);

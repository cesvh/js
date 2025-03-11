"use strict";
function aplicarDescuento(precio, descuento = 5) {
    let descuentoDecimal = descuento / 100;
    return precio * (1 - descuentoDecimal);
}
console.log(aplicarDescuento(100));
console.log(aplicarDescuento(100, 10));
function obtenerDia(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Mes Inválido');
    }
    return day;
}
console.log(obtenerDia(2019, 2));
console.log(obtenerDia(undefined, 2));

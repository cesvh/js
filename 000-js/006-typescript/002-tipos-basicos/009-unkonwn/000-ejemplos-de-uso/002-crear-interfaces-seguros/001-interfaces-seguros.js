"use strict";
function format(value) {
    switch (typeof value) {
        case 'string':
            console.log('String:', value.toUpperCase());
            break;
        case 'number':
            console.log('Number:', value.toFixed(2));
            break;
        default:
            console.log('Other types:', value);
    }
}
format('Lux');
format(299792);

"use strict";
class Numbers {
    constructor() {
        this.elements = [];
    }
    send() {
        console.log('Enviando datos...');
    }
}
class Main {
    static each(collection) {
        for (let i = 0; i < collection.elements.length; i++) {
            console.log(collection.elements[i]);
        }
    }
    static sendInfo(request) {
        request.send();
    }
    static showData(data) {
        console.log(`${data.nombre} ${data.edad}`);
    }
}
let numbers = new Numbers();
numbers.elements = [1, 2, 3, 4, 5];
let data = {
    nombre: 'César',
    edad: 33
};
Main.each(numbers);
Main.sendInfo(numbers);
Main.showData(data);

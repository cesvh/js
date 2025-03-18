interface ICollection {
    elements: number[];
}

interface IRequest {
    send(): void;
}

interface IData {
    nombre: string;
    edad: number;
    numero?: number;
}

class Numbers implements ICollection, IRequest {

    elements: number[] = [];

    send(): void {
        console.log('Enviando datos...');
    }
}

class Main {

    static each(collection: ICollection){
        for(let i = 0; i < collection.elements.length; i++){
            console.log(collection.elements[i]);
        }
    }

    static sendInfo(request: IRequest){
        request.send();
    }

    static showData(data: IData){
        console.log(`${data.nombre} ${data.edad}`);
    }
}

let numbers = new Numbers();
numbers.elements = [1, 2, 3, 4, 5];
let data: IData = {
    nombre: 'César',
    edad: 33
};

Main.each(numbers);
Main.sendInfo(numbers);
Main.showData(data);

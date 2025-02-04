const { readFile } = require('fs/promises');

const readText = async () => {
    try{
        const result1 = await readFile('./datas/autors.txt', 'utf-8');
        const result2 = await readFile('./datas/books.txt', 'utf-8');
        const result3 = await readFile('./datas/topics.txt', 'utf-8');
        console.log(result1);
        console.log(result2);
        console.log(result3);
    } catch(error){
        throw new Error("Error inesperado");
        console.log(error);
    }
};

readText();

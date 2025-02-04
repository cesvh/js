const { readFile } = require('fs');

const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            }
            resolve(data);
        });
    });
};

const readText = async () => {
    try{
        const result1 = await getText('./datas/autors.txt');
        const result2 = await getText('./datas/books.txt');
        const result3 = await getText('./datas/topics.txt');
        console.log(result1);
        console.log(result2);
        console.log(result3);
    } catch(error){
        throw new Error("Error inesperado");
        console.log(error);
    }
};

readText();

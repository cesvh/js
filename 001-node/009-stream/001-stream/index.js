// const { writeFile } = require('fs/promises');

// const writeBigFile = async () => {
//     await writeFile('./datas/datas.txt', 'Hello world '.repeat(100000));
// };
// writeBigFile();

const { createReadStream } = require('fs');
const stream = createReadStream('./datas/datas.txt', {
    encoding: 'utf-8'
});

stream.on('data', (chunk) => {
    console.log("chunck");
    console.log(chunk);
});

stream.on('end', () => {
    console.log('Proceso finalizado')
});

stream.on('error', () => {
    console.log('Ocurrió un error')
});

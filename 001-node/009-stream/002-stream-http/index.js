const http = require('http');
const { createReadStream } = require('fs');
const { error } = require('console');

http.createServer((req, res) => {
    const fileStream = createReadStream('./datas/datas.txt', {
        encoding: 'utf-8'
    });
    fileStream.on('data', (chunck) => {
        fileStream.pipe(res);
    });
    fileStream.on('error', error => {
        console.log(error);
    });
});

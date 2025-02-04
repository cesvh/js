const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Welcome to the Home</h1>');
        res.end();
    } else if(req.url === '/about'){
        // Código bloqueante
        // Si se haace una nueva petición al home, este no podrá acceder hasta que el código bloquenate haya finalizado
        // Javascript solo trabaja con un solo hijo de cpu
        for (let i = 0; i <= 1000000; i++) {
            console.log(`Finalización del for para el event loop: ${i}`);
        }
        res.write('<h1>About me!</h1>');
        res.end();
    } else {
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
}).listen(3000);

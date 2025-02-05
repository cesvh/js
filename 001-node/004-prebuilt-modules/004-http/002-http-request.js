const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Welcome to the Home</h1>');
        res.end();
    } else if(req.url === '/about'){
        res.write('<h1>About me!</h1>');
        res.end();
    } else {
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
}).listen(3000);

const http = require('http');

http.createServer((req, res) => {
    console.log(`Hola`);
}).listen(3000);

/*

// http://localhost:3000/

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\004-http>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\004-http> node .\001-http.js
Hola
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\004-http>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\004-http>

*/

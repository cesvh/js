const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('appName', 'Routes 3');
app.set('port', 3000);
app.use(morgan('dev'));

const home = require('./src/routers/home.js');
const user = require('./src/routers/user.js');

app.use(home);
app.use(user);

app.listen(app.get('port'), () => {
    console.log(`Running ${app.get('appName')} on port ${app.get('port')}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router> ls

    Directory: C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----       07/02/2025 10:48 a. m.                src
-a---       08/02/2025 11:18 a. m.            477 index.js

PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router\package.json:

{
  "name": "003-express.router",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router> npm install express morgan

added 74 packages, and audited 75 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router> npm install nodemon -D

added 29 packages, and audited 104 packages in 2s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router> npm run dev

> 003-express.router@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Running Routes 3 on port 3000
GET / 304 5.810 ms - -
GET /favicon.ico 404 7.843 ms - 150
GET /about 304 1.887 ms - -
GET /user 200 1.602 ms - 19
GET /users 200 1.513 ms - 20
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\003-express.router>

*/
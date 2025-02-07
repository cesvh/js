const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('appName', 'Router 1');
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));

require('./src/routes/home.js')(app);
require('./src/routes/user.js')(app);

app.listen(app.get('port'), () => {
    console.log(`Running server ${app.get('appName')} on ${app.get('port')}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require\package.json:

{
  "name": "001-module.exports-require",
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


PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require> npm install express morgan

added 74 packages, and audited 75 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require> npm install nodemon -D

added 29 packages, and audited 104 packages in 3s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require> npm run dev

> 001-module.exports-require@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
src/routes/home.js - module.exports = (app)
src/routes/user.js - module.exports = (app)
Running server Router 1 on 3000
app.get('/')
GET / 304 11.570 ms - -
app.get('/about')
GET /about 304 4.410 ms - -
app.get('user')
GET /user 304 4.992 ms - -
app.get('users')
GET /users 304 3.907 ms - -
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\001-module.exports-require>

*/

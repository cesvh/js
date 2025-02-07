const express = require('express');
const app = express();
const morgan = require('morgan');

// Setting
app.use(morgan('dev'));

// Middleware
app.set('appName', 'Router 2');
app.set('port', 3000);

const Home = require('./src/routes/home.js');
const User = require('./src/routes/user.js');

Home(app);
User(app);

app.listen(app.get('port'), () => {
    console.log(`Running server ${app.get('appName')} on ${app.get('port')}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require\package.json:

{
  "name": "002-module.exports-func-require",
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


PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require> npm install express morgan

added 74 packages, and audited 75 packages in 5s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require> npm install nodemon -D

added 29 packages, and audited 104 packages in 3s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require> npm run dev

> 002-module.exports-func-require@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
src/routes/home.js - function Home(app) {}
src/routes/User.js - function User(app) {}
Running server Router 2 on 3000
app.get('/',
app.get('/about',
app.get('/user',
app.get('/users',
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\002-router\002-module.exports-func-require>

*/

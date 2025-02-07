const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Settings
app.set('PORT', 3000);
app.set('appName', 'Statics Files');

// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.json({ "msg": "Bienvenido" });
});
app.get('/index.js', (req, res) => {
    res.send(`No soy el archivo index.js, soy el método get de la ruta /index.js`);
});
// Configuración necesaria para hacer eso de los archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'src', 'public')));
// GET http://localhost:3000/public/ 404 (Not Found)
// GET /public/ 404
// Cannot GET /public/
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(app.get('PORT'), () => {
    console.log(`Server ${app.get('appName')} on port ${app.get('PORT')}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files\package.json:

{
  "name": "001-static-files",
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


PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files> npm install express morgan

added 74 packages, and audited 75 packages in 5s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files> npm install nodemon -D

added 29 packages, and audited 104 packages in 4s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files> npm run dev

> 001-static-files@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server Statics Files on port 3000
GET / 304 4.098 ms - -
GET /index.js 304 2.495 ms - -
GET /public/ 304 9.345 ms - -
GET /public/index.css 304 7.662 ms - -
GET /public/index.js 304 2.677 ms - -
GET /public/index.js 304 1.581 ms - -
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>
PS C:\Users\cesvh\dev\github\js\002-express\005-static-files\001-static-files>

*/

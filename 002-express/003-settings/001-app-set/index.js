const express = require("express");
const app = express();

// Settings
app.set('case sensitive routing', true); // Rutas exactas
app.set('port', 3000);
app.set('appName', 'Express Seetings');

// Middlewares
// Routings

app.listen(PORT, () => {
    console.log(`Server ${app.get('appName')} running on port: ${app.get('port')}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set>
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set\package.json:

{
  "name": "001-app-set",
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

PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set>
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set> npm install express morgan

added 74 packages, and audited 75 packages in 2s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set>
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set> npm install nodemon -D

added 29 packages, and audited 104 packages in 3s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set>
PS C:\Users\cesvh\dev\github\js\002-express\003-settings\001-app-set>

*/

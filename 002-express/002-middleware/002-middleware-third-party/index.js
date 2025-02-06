const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

// https://www.npmjs.com/package/morgan
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send(`Bienvenido`);
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party> npm install express

added 69 packages in 3s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party> npm install morgan

added 5 packages, and audited 75 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party> node .\index.js
Running on port: 3000
GET / 200 4.027 ms - 21
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\002-middleware-third-party>

*/

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Bienvenido a mi sitio`);
});
app.get("/profile/:username/home/:lang", (req, res) => {
    let { username, lang } = req.params;
    console.log(`username: ${username}; lang: ${lang}`);
    res.send(`Welcome ${username}! you are using this site with ${lang} language.`);
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params> npm install express

added 69 packages in 1s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params> node .\index.js
Running on port: 3000
username: ces; lang: es
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\003-request-params>

*/

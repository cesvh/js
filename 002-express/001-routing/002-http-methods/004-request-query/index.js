const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Bienvenido...`);
})
// app.all() // funciona con todos los metodos http
// http://localhost:3000/search?book=el%20problema%20de%20los%203%20cuerpos&format=pdf&format=físico
app.get("/search", (req, res) => {
    const { book, format } = req.query;
    console.log(req.query);
    console.log(book);
    console.log(format);
    res.send(`Welcome!`);
})
app.listen(PORT, () => {});

/*

PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query> npm install express

added 69 packages in 3s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query> node .\index.js
{ book: 'el poema de gilgamesh', format: 'pdf' }
el poema de gilgamesh
pdf
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\004-request-query>

*/

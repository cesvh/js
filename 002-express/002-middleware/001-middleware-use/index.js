const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Todos los requests pasa por este middleware
app.use((req, res, next) => {
    console.log(`app.use()`);
    console.log(req.url);
    next();
});
// http://localhost:3000/
app.get("/", (req, res) => {
    res.send(`Bienvenido!`);
});
// http://localhost:3000/home
app.get("/home", (req, res) => {
    res.send(`Página principal`);
});
// 
// http://localhost:3000/profile?username=cesvh
app.use((req, res, next) => {
    console.log(`app.use() - if else`);
    console.log(req.url);
    if(req.query.username === "parsec"){
        next();
    } else {
        res.send(`401`);
    }
});
// http://localhost:3000/profile?username=parsec
// Este código se ejecuta siempre y cuando haya un parámetro username y cuyo valor sea "parsec"
app.get("/profile", (req, res) => {
    const { username } = req.query;
    console.log(`app.get("/profile"), ()`);
    console.log(`/profile?username=${username}`);
    res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use> npm install express

added 69 packages in 4s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use> node .\index.js
Running on port: 3000
app.use()
/
app.use()
/home
app.use()
/profile?username=cesvh
app.use() - if else
/profile?username=cesvh
app.use()
/profile?username=parsec
app.use() - if else
/profile?username=parsec
app.get("/profile"), ()
/profile?username=parsec
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use>
PS C:\Users\cesvh\dev\github\js\002-express\002-middleware\001-middleware-use>

*/

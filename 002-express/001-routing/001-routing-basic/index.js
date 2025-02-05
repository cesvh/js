const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a mi sitio...");
});
app.get("/about", (req, res) => {
    res.status(200).send("En este sitio web...");
});
app.get("/me", (req, res) => {
    res.status(200).send("¿Quíen soy?");
});
app.use((req, res) => {
    res.status(400).send("Página no encontrada");
});

app.listen(PORT, () => {
    console.log(`running server on port ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\001-routing\001-routing-basic>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\001-routing-basic> npm install express

added 69 packages in 3s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\001-routing-basic>

*/

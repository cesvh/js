const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Bienvenidos...`);
});
app.post("/users", (req, res) => {
    res.json({
        "name": "cesvh",
        "year": 299
    });
});
app.put("/user", (req, res) => {
    res.send(`user en método put`);
});
app.delete("/user", (req, res) => {
    res.send(`user en método delete`);
});

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods> npm install express

added 69 packages in 3s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods>

*/

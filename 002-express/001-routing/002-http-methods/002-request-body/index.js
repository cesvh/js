const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Bienvenido...`);
});
app.post("/user", (req, res) => {
    console.log(req.body);
    let { username } = req.body;
    res.json({
        "user": username
    });
});

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body> npm install express

added 69 packages in 3s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body>
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body> node .\index.js
server running on port: 3000
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body> ^C
PS C:\Users\cesvh\dev\github\js\002-express\001-routing\002-http-methods\002-request-body>

*/

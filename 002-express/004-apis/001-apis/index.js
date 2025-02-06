const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;

let users = [
    {
        id: 1,
        name: "parsec",
        year: 299
    },
    {
        id: 2,
        name: "milky way",
        year: 100000
    }
];

// app.use(morgan("dev"));
app.use(express.json());

app.get("/users", (req, res) => {
    console.log(`app.get("/users")`);
    console.log(users);
    res.json(users);
});
app.get("/users/:id", (req, res) => {
    console.log(`app.get("/users/:id")`);
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(item => { return parseInt(item.id) === parseInt(id); });
    if(!user){
        return res.status(404).json({ "msg": "User not found!"});
    }
    res.json(user);
});
// app.post("/users", (req, res) => {
//     const newUsers = req.body;
//     users.push({...newUsers, id: users.length + 1});
//     console.log(newUsers);
//     res.json(users);
// });
// app.delete("/users/:id", (req, res) => {
//     let idDelete = parseInt(req.params.id);
//     console.log(`delete: ${users}`);
//     let idFound = users.find(item =>  parseInt(item.id) === idDelete);
//     console.log(idFound);
//     if (!idFound) {
//         console.log("User not found!");
//          return res.status(404).send({ "msg": "User not found!" });
//     }
//     users = users.filter( item => parseInt(item.id) !== idDelete );
//     console.log(users);
//     res.json(users);
// });
// app.put("/users/:id", (req, res) => {
//     let idUpdate = parseInt(req.params.id);
//     console.log(`idUpdate: ${idUpdate}`);
//     let name = req.body;
//     console.log(`name: ${name}`);
//     let idFound = users.find( item => parseInt(item.id) === idUpdate);
//     console.log(`idFound: ${idFound}`);
//     if (!idFound) {
//         console.log("User not found!");
//         res.status(404).send({ "msg": "User not found!" });
//     }
//     users = users.map( item => parseInt(item.id) === idUpdate ? {...item, ...name} : item);
//     console.log(users);
//     res.json(users);
// });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis> npm init -y
Wrote to C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis\package.json:

{
  "name": "001-apis",
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


PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis> npm install express morgan

added 74 packages, and audited 75 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis> npm install nodemon -D

added 29 packages, and audited 104 packages in 2s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis> npm run dev

> 001-apis@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server running on port: 3000
[
  { id: 1, name: 'parsec', year: 299 },
  { id: 2, name: 'milky way', year: 100000 }
]
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis> npm run dev

> 001-apis@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server running on port: 3000
app.get("/users")
[
  { id: 1, name: 'parsec', year: 299 },
  { id: 2, name: 'milky way', year: 100000 }
]
app.get("/users/:id")
{ id: '1' }
^C^C¿Desea terminar el trabajo por lotes (S/N)?
^CEl sistema no puede abrir el dispositivo o archivo especificado.
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
PS C:\Users\cesvh\dev\github\js\002-express\004-apis\001-apis>
*/

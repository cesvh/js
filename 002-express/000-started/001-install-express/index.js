const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server on: ${PORT}`);
});

/*

PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express>
PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express> npm install express

added 69 packages in 1s

14 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express>
PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express> node .\index.js
server on: 3000
PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express> ^C
PS C:\Users\cesvh\dev\github\js\002-express\000-started\001-install-express>

*/

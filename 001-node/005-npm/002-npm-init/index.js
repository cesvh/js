console.log("hello world");

/*

PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> ls

    Directory: C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---       02/02/2025 02:32 p. m.              0 index.js

PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (002-npm-init)
version: (1.0.0) 0.0.1
description: npm init
entry point: (index.js)
test command:
git repository:
keywords: node npm-init
author: cesvh
license: (ISC)
About to write to C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init\package.json:

{
  "name": "002-npm-init",
  "version": "0.0.1",
  "description": "npm init",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm-init"
  ],
  "author": "cesvh",
  "license": "ISC"
}


Is this OK? (yes) yes
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> cat .\package.json
{
  "name": "002-npm-init",
  "version": "0.0.1",
  "description": "npm init",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm-init"
  ],
  "author": "cesvh",
  "license": "ISC"
}
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> npm install nodemon -D

added 29 packages, and audited 30 packages in 2s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> cat .\package.json
{
  "name": "002-npm-init",
  "version": "0.0.1",
  "description": "npm init",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [
    "node",
    "npm-init"
  ],
  "author": "cesvh",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init> npm run dev

> 002-npm-init@0.0.1 dev
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
hello world
[nodemon] clean exit - waiting for changes before restart
^C^C¿Desea terminar el trabajo por lotes (S/N)? s
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>
PS C:\Users\cesvh\dev\github\js\node\005-npm\002-npm-init>

*/

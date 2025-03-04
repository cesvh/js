PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> node --version
v21.1.0
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> npm --version
10.2.3
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> tsc --version
tsc: The term 'tsc' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> npm install -g typescript

added 1 package in 1s
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> tsc --version
Version 5.8.2
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> tsc-node --version
tsc-node: The term 'tsc-node' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> ls
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> mkdir 001-planck

    Directory: C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----       04/03/2025 12:43 a. m.                001-planck

PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando> cd .\001-planck\
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> ls
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> ls

    Directory: C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---       04/03/2025 12:48 a. m.             61 001-planck.ts

PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> cat .\001-planck.ts
let message: string = 'Hello, World!';
console.log(message);
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> tsc .\001-planck.ts
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> ls

    Directory: C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---       04/03/2025 12:49 a. m.             53 001-planck.js
-a---       04/03/2025 12:48 a. m.             61 001-planck.ts

PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> node .\001-planck.ts
C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck\001-planck.ts:1
let message: string = 'Hello, World!';
           ^

SyntaxError: Unexpected token ':'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.1.0
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> node .\001-planck.js
Hello, World!
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PS C:\Users\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> ts-node --version
ts-node: The term 'ts-node' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> tsc --version
Version 5.8.2
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> npm install -g ts-node

added 20 packages in 3s
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck> ts-node --version
v10.9.2
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
PSPS C:sers\cesvh\dev\github\js\000-js\006-typescript\001-empezando\001-planck>
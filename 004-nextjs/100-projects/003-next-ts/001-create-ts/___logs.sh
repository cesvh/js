PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts> npx create-next-app 001-create-ts
Need to install the following packages:
create-next-app@15.2.3
Ok to proceed? (y)
√ Would you like to use TypeScript? ... No / Yes // Y
√ Would you like to use ESLint? ... No / Yes // Y
√ Would you like to use Tailwind CSS? ... No / Yes // Y
√ Would you like your code inside a `src/` directory? ... No / Yes // Y
√ Would you like to use App Router? (recommended) ... No / Yes // Y
√ Would you like to use Turbopack for `next dev`? ... No / Yes // Y
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes // N
Creating a new Next.js app in C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 315 packages, and audited 316 packages in 43s

130 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created 001-create-ts at C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts> ls

    Directory: C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----       18/03/2025 04:18 p. m.                001-create-ts

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts> cd .\001-create-ts\
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts> ls

    Directory: C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----       18/03/2025 04:18 p. m.                node_modules
d----       18/03/2025 04:18 p. m.                public
d----       18/03/2025 04:18 p. m.                src
-a---       18/03/2025 04:17 p. m.            480 .gitignore
-a---       18/03/2025 04:17 p. m.            393 eslint.config.mjs
-a---       18/03/2025 04:17 p. m.            211 next-env.d.ts
-a---       18/03/2025 04:17 p. m.            133 next.config.ts
-a---       18/03/2025 04:18 p. m.         187958 package-lock.json
-a---       18/03/2025 04:18 p. m.            583 package.json
-a---       18/03/2025 04:17 p. m.             81 postcss.config.mjs
-a---       18/03/2025 04:17 p. m.           1450 README.md
-a---       18/03/2025 04:18 p. m.            602 tsconfig.json

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\003-next-ts\001-create-ts> npm run dev

> 001-create-ts@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.2.3 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.66:3000

 ✓ Starting...
 ✓ Ready in 1322ms
 ○ Compiling / ...
 ✓ Compiled / in 3.3s
 GET / 200 in 4154ms
 ○ Compiling /favicon.ico ...
 ✓ Compiled /favicon.ico in 782ms
 GET /favicon.ico?favicon.45db1c09.ico 200 in 1002ms
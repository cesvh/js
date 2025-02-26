PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects> npx create-next-app 002-prisma-crud
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 370 packages, and audited 371 packages in 43s

144 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created 002-prisma-crud at C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects> cd .\002-prisma-crud\
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
# https://www.prisma.io/docs/getting-started/quickstart-sqlite
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npm install prisma --save-dev # -D

added 9 packages, and audited 380 packages in 7s

144 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npx prisma init --datasource-provider sqlite

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

Applying migration `20250226172658_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20250226172658_init/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)

✔ Generated Prisma Client (v6.4.1) to .\node_modules\@prisma\client in 67ms


PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
# 
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npx prisma studio
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Prisma Studio is up on http://localhost:5555
¿Desea terminar el trabajo por lotes (S/N)?
^C
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npx prisma studio &

Id     Name            PSJobTypeName   State         HasMoreData     Location             Command
--     ----            -------------   -----         -----------     --------             -------
1      Job1            BackgroundJob   Running       True            localhost            npx prisma studio

PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud>
PS C:\Users\cesvh\dev\github\js\004-nextjs\100-projects\002-prisma-crud> npm run dev

> 002-prisma-crud@0.1.0 dev
> next dev

   ▲ Next.js 15.1.7
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.66:3000
   - Environments: .env

 ✓ Starting...
 ✓ Ready in 1822ms
 ○ Compiling / ...
 ✓ Compiled / in 2.8s (602 modules)
 GET / 200 in 3678ms
 ✓ Compiled in 917ms (291 modules)
 ○ Compiling /favicon.ico ...
 ✓ Compiled /favicon.ico in 755ms (326 modules)
 GET /favicon.ico 200 in 923ms
 
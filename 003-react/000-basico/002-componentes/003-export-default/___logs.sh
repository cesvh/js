PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes>
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes> npm create vite
√ Project name: ... 003-export-default
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default...

Done. Now run:

  cd 003-export-default
  npm install
  npm run dev

PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes>
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes> cd .\003-export-default\
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default>
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default> npm install
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm WARN deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 273 packages, and audited 274 packages in 22s

109 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default>
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default> npm run dev

> 003-export-default@0.0.0 dev
> vite


  VITE v4.5.9  ready in 314 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
Error:   Failed to scan for dependencies from entries:
  C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/index.html

  X [ERROR] The JSX syntax extension is not currently enabled

    src/Components/Blog.js:2:11:
      2 │     return <h1>Mi Blog</h1> # ERROR Por extención js en ./src/Components/Blog.js
        ╵            ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.


    at failureErrorWithLog (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1649:15)
    at C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1058:25
    at runOnEndCallbacks (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1484:45)
    at buildResponseToResult (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1056:7)
    at C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1068:9
    at new Promise (<anonymous>)
    at requestCallbacks.on-end (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:1067:54)
    at handleRequest (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:729:19)
    at handleIncomingPacket (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:755:7)
    at Socket.readFromStdout (C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default\node_modules\esbuild\lib\main.js:679:7)
Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
17:34:19 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/src/Components/Blog.js:2:29
  1  |  function Blog(){
  2  |      return <h1>Mi Blog</h1>
     |                              ^
  3  |  }
  4  |
      at formatError (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44065:46)
      at TransformContext.error (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44061:19)
      at TransformContext.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:41785:22)
      at async Object.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44355:30)
      at async loadAndTransform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:55029:29)
      at async viteTransformMiddleware (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:64617:32)
17:34:46 [vite] hmr update /src/Components/User.jsx
Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
17:34:46 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/src/Components/Blog.js:2:30
  1  |  function Blog(){
  2  |      return <h1>Mi Blog</h1>;
     |                               ^
  3  |  }
  4  |
      at formatError (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44065:46)
      at TransformContext.error (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44061:19)
      at TransformContext.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:41785:22)
      at async Object.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44355:30)
      at async loadAndTransform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:55029:29)
      at async viteTransformMiddleware (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:64617:32)
17:34:49 [vite] hmr update /src/Components/User.jsx
Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
17:34:49 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/src/Components/Blog.js:2:30
  1  |  function Blog(){
  2  |      return <h1>Mi Blog</h1>;
     |                               ^
  3  |  }
  4  |
      at formatError (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44065:46)
      at TransformContext.error (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44061:19)
      at TransformContext.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:41785:22)
      at async Object.transform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:44355:30)
      at async loadAndTransform (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:55029:29)
      at async viteTransformMiddleware (file:///C:/Users/cesvh/dev/github/js/003-react/000-basico/002-componentes/003-export-default/node_modules/vite/dist/node/chunks/dep-3936e161.js:64617:32)
17:36:14 [vite] page reload src/main.jsx
17:36:15 [vite] page reload src/main.jsx (x2)
17:36:15 [vite] page reload src/main.jsx (x3)
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default>
PS C:\Users\cesvh\dev\github\js\003-react\000-basico\002-componentes\003-export-default>
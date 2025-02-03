// Module PATH
// windows: C:\\Users\\CES\\
// linux: home/ces/
const path = require('path');

// console.log("--------------------------------------path.join");
console.log(path.join('public', 'dist', 'styles', 'main.css')); // Ruta válida de un OS

const filepath = path.join('public', 'dist', 'styles', 'main.css');


// console.log("--------------------------------------path.dirname");
console.log(path.dirname(filepath));
// console.log("--------------------------------------path.basename");
console.log(path.basename(filepath));
// console.log("--------------------------------------path.parse");
console.log(path.parse(filepath));
// console.log("--------------------------------------path.resolve");
console.log(path.resolve('module'));

/*

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\002-path>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\002-path> node .\001-path.js
--------------------------------------path.join
public\dist\styles\main.css
--------------------------------------path.dirname
public\dist\styles
--------------------------------------path.basename
main.css
--------------------------------------path.parse
{
  root: '',
  dir: 'public\\dist\\styles',
  base: 'main.css',
  ext: '.css',
  name: 'main'
}
--------------------------------------path.resolve
C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\002-path\module
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\002-path>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\002-path>

*/

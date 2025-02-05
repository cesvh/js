const fs = require('fs');

let autors = fs.readFileSync('./datas/autors.txt', 'utf-8');
console.log("--------------------------------------autors");
console.log(autors);

autors = 'Borgues\nAsimov';
fs.writeFileSync('./datas/autors.txt', autors, {
    flag: 'a'
});

autors = fs.readFileSync('./datas/autors.txt', 'utf-8');
console.log("--------------------------------------autors");
console.log(autors);

/*

PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync> node .\002-writeFileSync.js
--------------------------------------autors
Cixin Liu
Roberto Llinás

--------------------------------------autors
Cixin Liu
Roberto Llinás
Borgues
Asimov
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>
PS C:\Users\cesvh\dev\github\js\node\004-prebuilt-modules\003-fs\001-sync>

*/

const fs = require("fs");

let line1 = "First line";
let line2 = "\nSecond line";
let line3 = "\nThird line";

fs.writeFileSync("./datas/topics.txt", line1, { flag: "a" });
fs.writeFileSync("./datas/topics.txt", line2, { flag: "a" });
fs.writeFileSync("./datas/topics.txt", line3, { flag: "a" });

let topics = fs.readFileSync("./datas/topics.txt", "utf8");
console.log(topics);

/*

PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> node .\index.js
First line
Second line
Third line
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> cat .\datas\topics.txt
First line
Second line
Third line
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> 
PS C:\Users\cesvh\dev\github\js\node\prebuilt-modules\fs\fs-writeFileSync> 

*/

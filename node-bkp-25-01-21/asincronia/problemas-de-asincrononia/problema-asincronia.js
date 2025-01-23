text = "my text global"

function myFunctionOne(){
    setTimeout(function () {
        console.log(`function myFunctionOne - setTimeout - 3000 - ${text}`);
    }, 3000);
}

function myFunctionTwo(){
    setTimeout(function () {
        console.log(`function myFunctionTwo - setTimeout - 1000 - ${text}`);
    }, 1000);
}

myFunctionOne();
myFunctionTwo();

console.log(`Last row of file`);

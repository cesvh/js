function myFunctionOne(text, myCallbackOne){
    setTimeout(function () {
        console.log(`function myFunctionOne - setTimeout - 3000 - ${text}`);
        myCallbackOne(text);
    }, 3000);
}

function myFunctionTwo(text, myCallbackTwo){
    setTimeout(function () {
        console.log(`function myFunctionTwo - setTimeout - 3000 - ${text}`);
        myCallbackTwo();
    }, 3000);
}

myFunctionOne("text to myFunctionOne", function(text) {
    myFunctionTwo(text, function (){
        console.log(`myFunctionOne -> myFunctionTwo -> console.log`);
    });
});

console.log(`Last row of file`);

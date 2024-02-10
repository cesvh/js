function myFunction(myCallbackFunction){
    setTimeout(function(){
        console.log(`myFunction - called - setTimeout`);
        myCallbackFunction();
    }, 1000);
}

myFunction(function(){
    console.log(`my real function: myFunction - call`);
});

console.log(`last row`);

function iAmCallback(){
    setTimeout(function() {
        console.log(`iAmCallback - setTimeout - console.log()`);
    }, 3000);
}

iAmCallback();
console.log(`After - iAmCallback - Last console.log()`);

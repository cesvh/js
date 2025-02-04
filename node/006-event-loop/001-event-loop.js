console.log('first line');
setTimeout(() => {
    console.log('second line');
});
console.log('last line');

/*

PS C:\Users\cesvh\dev\github\js\node>
PS C:\Users\cesvh\dev\github\js\node> cd .\006-event-loop\
PS C:\Users\cesvh\dev\github\js\node\006-event-loop>
PS C:\Users\cesvh\dev\github\js\node\006-event-loop> ls

    Directory: C:\Users\cesvh\dev\github\js\node\006-event-loop

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---       02/02/2025 06:17 p. m.            113 index.js

PS C:\Users\cesvh\dev\github\js\node\006-event-loop>
PS C:\Users\cesvh\dev\github\js\node\006-event-loop> node .\index.js
first line
last line
second line
PS C:\Users\cesvh\dev\github\js\node\006-event-loop>
PS C:\Users\cesvh\dev\github\js\node\006-event-loop>

*/

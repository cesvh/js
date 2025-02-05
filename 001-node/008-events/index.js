const { EventEmitter } = require('events');

const objEmitter = new EventEmitter();

objEmitter.on('myEvent', (data) => {
    console.log(data);
});

objEmitter.emit('myEvent', 299);
objEmitter.emit('myEvent', [2, 9, 9]);
objEmitter.emit('myEvent', { 'luz': 299792.458, "planck": 0.0000000000000000000000000000000000000000001});

/*

PS C:\Users\cesvh\dev\github\js\node\008-events>
PS C:\Users\cesvh\dev\github\js\node\008-events> node .\index.js
299
[ 2, 9, 9 ]
{ luz: 299792.458, planck: 1e-43 }
PS C:\Users\cesvh\dev\github\js\node\008-events>
PS C:\Users\cesvh\dev\github\js\node\008-events>

*/

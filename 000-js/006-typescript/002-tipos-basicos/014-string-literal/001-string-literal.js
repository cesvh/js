"use strict";
let mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseover'; // compiler error
let anotherEvent;
anotherEvent = 'mouseup'; // valid
anotherEvent = 'mousedown'; // valid
console.log(mouseEvent);
console.log(anotherEvent);

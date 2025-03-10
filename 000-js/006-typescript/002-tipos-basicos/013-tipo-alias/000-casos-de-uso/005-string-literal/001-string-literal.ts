type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MyMouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MyMouseEvent;
anotherEvent = 'mouseup'; // valid
anotherEvent = 'mousedown'; // valid

console.log(mouseEvent);
console.log(anotherEvent);

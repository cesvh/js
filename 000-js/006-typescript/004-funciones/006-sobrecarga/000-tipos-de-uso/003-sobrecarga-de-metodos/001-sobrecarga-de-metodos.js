"use strict";
class Counter {
    constructor() {
        this.current = 0;
    }
    count(target) {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            // set current to target
            // this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();
console.log(counter.count());
console.log(counter.count(2));

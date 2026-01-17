function execute(fn){
    fn.toString = "He roto tu función";
}

const fn1 = () => "Hace algo";

console.log(fn1.toString());

execute(fn1);

console.log(fn1());
console.log(fn1.toString);

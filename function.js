// Rest parameter
console.log("\" Rest Parameter\"")
function user(name,surname,...title){
    console.log(name + '' + surname);
    console.log(title);
}
user('aman','verma','subject','phy','maths');

// argument variable   --- use in the old JS before rest
console.log("\" argument variable\"")
function showNum(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[2]);
}
showNum(1,2,56,78);

// Spread syntax
console.log("\" Spread syntax\"")
let maxArr = [2,35,8,90];
console.log(Math.max(maxArr));   // here list of argument is expected

let spreadSyntax = [2,35,8,90];
console.log(Math.max(...spreadSyntax))
console.log(...spreadSyntax)



// Function Object    ----   func is object so it has property & methods
console.log("\" function object\"")
function example(a,b,c){}
console.log(example.name)           // return functaion name
console.log(example.length)         // return function length


// setTimeout & setInterval
function sayHi(){
    console.log('hello');
}
setTimeout(sayHi,1000);

// clearTimeout
let timer = setTimeout(()=> console.log('never happen'),2000);
console.log(timer);
clearTimeout(timer);


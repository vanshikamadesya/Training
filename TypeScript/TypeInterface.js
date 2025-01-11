// Type Interface
console.log("\"Type Interface\"");
var a = 10; // inferred as num
var b = 'hello'; // inferred as string
var c = true; // inferred as bool
// a = 'world'              // give error           
console.log(typeof a);
// Type interface in complex object
var arr = [1, 3, 'hello'];
arr.push('world');
// arr.push(true)           // give error
console.log(arr);
// Type assertion
console.log("\"Type Assertion\"");
var value = 'This is typescript!';
// TypeScript sees 'input' as 'any' and doesn't know it's a string
var length1 = value.length; // using angle bracket
var length2 = value.length; // using as syntax
console.log(typeof value);
console.log(length1);
var obj = { id: 101, name: 'Maths' };
var Subject = obj;
console.log(Subject.id);
console.log(Subject.name);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number
console.log("\"Number\"");
var first = 555;
var second = 0x37CF; // hexadecimal
var third = 223; // octa
var fourth = 57; // binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// String
console.log("\"String\"");
var users = 'jack';
console.log(users);
// Boolean
console.log("\"Boolean\"");
var isUpdated = false;
console.log(isUpdated);
// Array
console.log("\"Array\"");
var arrAnimal = ['dog', 'cat', 'monkey']; // declare using [] method
console.log(arrAnimal);
var arrFruit = ['apple', 'banana', 'cherry']; // declare using generic array type
console.log(arrFruit);
var arrMulti = ['dog', 5, 'cat', 91]; // multi type array
console.log(arrMulti);
var arrMulti2 = ['apple', 3, 'guava', 45];
console.log(arrMulti2);
// Tuple
console.log("\"Tuple\"");
var department; // declare tuple
department = [1, 'IT', true, 200,]; // initialize tuple
console.log(department);
var student; // tuple array
student = [[1, 'Anam'], [2, 'Neha'], [3, 'ANkit']];
console.log(student);
// Enum  --- group related values
console.log("\"Enum\"");
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.East);
var colors;
(function (colors) {
    colors["red"] = "Red";
    colors["green"] = "Green";
    colors["blue"] = "Blue";
})(colors || (colors = {}));
console.log(colors.blue);
var Mixed;
(function (Mixed) {
    Mixed[Mixed["id"] = 1] = "id";
    Mixed["city"] = "surat";
})(Mixed || (Mixed = {}));
console.log(Mixed.city);
// Union   --- allow more than one type
console.log("\"Union\"");
var code;
code = 'abc',
    // code = 1
    console.log(code);
// Any
console.log("\"Any\"");
var value;
value = 123;
value = 'Hello';
value = true;
console.log(value);
// Void
console.log("\"Void\"");
function logMessage() {
    console.log('hello');
}
// let speech: void = logMessage();
console.log(logMessage());
// Never
console.log("\"Never\"");
function throwErr(message) {
    throw new Error(message);
}
// throwErr('Something wrong');
// Object
console.log("\"Object\"");
var obj;
obj = ['apple', 'cherry', 'coconut']; // array are object
obj = { name: 'sneha', age: 25 };
console.log(obj);
function create(obj2) {
    console.log("Object:", obj2);
}
create({ name: 'achal', age: 23 });
create([1, 13, 56]);
// create(42);                  // give error
// unknown
console.log("\"Unknown\"");
var value2;
value2 = 2;
value2 = 'hello';
console.log(value2);

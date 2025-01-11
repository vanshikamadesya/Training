// generic array (array can be of any type)
console.log("\" Generic Array \"");
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
console.log(myNumArr);
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler
// generic with multiple type variable
function combine(value1, value2) {
    return "".concat(value1, " and ").concat(value2);
}
var result = combine(5, "apples");
console.log(result);
// Generic class
console.log("\" Generic class \"");
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    // static Generic method to return a pair of values of any type
    Box.wrap = function (item1, item2) {
        return [item1, item2];
    };
    // getValue is a method that returns the value of type T
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(42); // numberBox has type 'Box<number>'
console.log(numberBox.getValue());
var stringBox = new Box("hello"); // stringBox has type 'Box<string>'
var pair = Box.wrap(1, "pencil"); // returns a tuple of type [T, U].
console.log(pair);

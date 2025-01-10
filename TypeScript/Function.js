var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// named function
console.log("\" Named Function\"");
function mul(x, y) {
    return (x * y);
}
console.log(mul(2, 3));
// anonymus function
console.log("\" Anonymus Function\"");
var Sum = function (x, y) {
    return x + y;
};
console.log(Sum(5, 9));
// optional parameter
console.log("\" optional parameter\"");
function greet(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
    }
    else {
        return "Hello, ".concat(name, ".");
    }
}
console.log(greet("Vanshika", 25));
console.log(greet("John"));
// Default parameter
console.log("\" default parameter\"");
function greets(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greets("Vanshika"));
console.log(greets("John", "Hi"));
// Rest Paremetr
console.log("\" Rest parameter\"");
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
console.log(multiply(1, 2, 3, 4));
console.log(multiply(5, 10));
// Spread syntax
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(combined);
// Parameter Destructing
console.log("\" Parameter Destructing \"");
//{ name, country }: User destructures the name and country properties from the user object.
function greetUser(_a) {
    var name = _a.name, country = _a.country;
    return "Hello ".concat(name, " from ").concat(country, "!");
}
var users = { name: "vansh", age: 25, country: "India" };
console.log(greetUser(users));
// Arrow Function
console.log("\" Arrow Function \"");
var sub = function (x, y) {
    return x - y;
};
console.log(sub(79, 7));

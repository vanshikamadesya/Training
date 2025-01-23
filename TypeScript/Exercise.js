// Difference between Union and Intersection Types
// Union: Only one type's properties are required.
var u1 = { name: "Alice" }; // Valid
var u2 = { age: 25 }; // Valid
var u3 = { name: "Alice", age: 25 }; // Valid
// Intersection: All properties from both types are required.
var i1 = { name: "Alice", age: 25 }; // Valid
var shapes = [
    { kind: "square", x: 10 },
    { kind: "triangle", x: 6, y: 8 }
];
console.log("T3 shapes:", shapes);
// Parameters
function add(a, b) {
    return a + b;
}
var addParams = [45, 'hello'];
console.log(addParams);
// InstanceType
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
        this.y = 0;
    }
    return C;
}());
var t7 = new C();
console.log(t7);
var t8 = { a: 1 };
console.log(t8);
// Using Partial to make all properties optional
var personPartial = {
    name: "Alice" // Only `name` is provided, others are optional
};
console.log(personPartial);

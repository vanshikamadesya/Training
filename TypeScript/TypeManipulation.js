"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Interface
console.log("\"Generic Interface\"");
//identity function is generic, meaning it works with any type passed to it and returns the same type.
function identity(arg) {
    return arg;
}
//automatically infers the type when call the function
var myIdentity = identity;
var result = myIdentity(42);
console.log(result);
var strResult = myIdentity('Hello');
console.log(strResult);
// Generic Parameter Default
console.log("\"Generic Parameter Default\"");
//T = string: The generic parameter T defaults to string.So when no argument is passed, T is inferred as string
function identitys(value) {
    return value;
}
console.log(identitys(42));
console.log(identitys("Hello"));
console.log(identitys(true));
// console.log(identitys());             
// Variance Annotation
console.log("\"Variance Annotation\"");
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        console.log("Animal speaks");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog barks");
    };
    return Dog;
}(Animal));
function getAnimal() {
    return new Animal();
}
function getDog() {
    return new Dog();
}
function feedAnimal(animal) {
    animal.speak();
}
function feedDog(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Only call bark if it's a Dog
    }
    animal.speak(); // Animal's speak method will always be available
}
//covariant relationship: where a subtype (Dog) can be assigned to a supertype (Animal), program behaves correctly.
var animal = getDog();
animal.speak();
// Contravariant: A function that accepts an Animal can accept a Dog because Dog extends Animal
var feed = feedDog; // Works, because Dog is a subtype of Animal
feed(new Dog());
// keyof type operator
console.log("\"keyof type operator\"");
var key;
key = "name";
console.log(typeof key);
// index type
console.log("\"index type\"");
var MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
// conditional type
console.log("\"conditional type\"");
// mapped type
console.log("\"mapped type\"");
var prefixedKeys = {
    prefix_name: "John",
    prefix_age: 30,
    prefix_isActive: true
};
console.log(prefixedKeys);
// template literal type
console.log("\"template literal type\"");
var greeting = "Hello TypeScript";
console.log(greeting);
var redItem = "color-red";
var blueItem = "color-blue";

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
// Interface
console.log("\"Interface\"");
var u = {
    id: 1,
    name: 'neha',
    designation: 'HR',
    getFullName: function (prefix) {
        return "".concat(prefix, " ").concat(this.id, " ").concat(this.name, " ").concat(this.designation);
    }
};
console.log(u.getFullName('User: '));
// Extending interface
console.log("\"Extending Interface\"");
var emp = {
    id: 2,
    name: "aman",
    age: 25,
    dept: "IT",
    designation: "TL",
    getFullName: function (prefix) {
        return "".concat(prefix, " ").concat(this.id, " ").concat(this.name, " ").concat(this.age, "  (").concat(this.dept, ") ").concat(this.designation);
    }
};
console.log(emp.getFullName('Employee: '));
// Interface with func type
console.log("\"Interface with func type\"");
function addNum(a, b) {
    console.log('addNum: a = ' + a + ', b = ' + b);
    return a + b;
}
var add = addNum; // Assign the function to the interface
var result = add(45, 89); // Call the function
console.log('Result:', result);
// Implementing interface
console.log("\"Implementing Interface\"");
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("".concat(this.brand, " is moving at ").concat(this.speed, " km/h."));
    };
    return Car;
}());
var myCar = new Car("Toyota", 120);
myCar.move();
// Class
console.log("\"CLass\"");
var Animal = /** @class */ (function () {
    // Constructor to initialize the object
    function Animal(name) {
        this.name = name;
    }
    // Method to display animal details
    Animal.prototype.getDetail = function () {
        return "".concat(this.name);
    };
    // method to display message
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
// instantiating animal class
var animal = new Animal("Monkey");
console.log(animal.getDetail());
console.log(animal.speak());
// Extending Class
console.log("\"Extending CLass\"");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // Call constructor of the parent(Animal) & initial property name
        _this.breed = breed;
        return _this;
    }
    // Overriding speak method
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
// Static member  --   call the static method directly without creating an instance
console.log("\"Static member\"");
var MathUtility = /** @class */ (function () {
    function MathUtility() {
    }
    MathUtility.add = function (a, b) {
        return a + b;
    };
    MathUtility.multiply = function (a, b) {
        return a * b;
    };
    return MathUtility;
}());
//call the static methods directly on the class 
console.log(MathUtility.add(2, 3));
console.log(MathUtility.multiply(2, 3));
// Abstract class  --- cannot be instantiated directly
console.log("\"Abstract class\"");
// abstract method are those without an implementation, that must be implemented by subclasses.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(5);
console.log(circle.getArea());

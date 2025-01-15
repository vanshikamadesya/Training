// 1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
var names = "John";
var age = 30;
console.log(names, age);
// 2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.  
var var1 = 'alice';
var pi = 3.14;
var var2 = 23;
if (true) {
    var var1_1 = 'john';
    age = 56;
    //   pi = 2;
}
console.log(var1);
console.log(var2);
console.log(pi);
// 3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.  
var n1 = 58;
var str = 'hello';
var bool = false;
var un = undefined;
var n2 = 58;
// add
var sum = n1 + n2;
console.log("Sum: ", sum);
// concat
var concat = str + "world";
console.log("Concat: ", concat);
// boolean
var isBool = bool || true;
console.log(isBool);
// undefined
if (un === undefined) {
    console.log("undefined");
}
else {
    console.log("defined");
}
// 4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.  
var num = 85;
// num = 'hello';
console.log(num);
//5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.  
var assignVar = 25;
console.log(typeof assignVar);
// assignVar = 'hello';
// 6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().  
var assertValue = '52';
var value = parseInt(assertValue);
console.log(value);
var assertValue2 = 125;
var value2 = assertValue2.toString();
console.log(typeof value2);
var person = {
    name: 'John',
    age: 30,
    isActive: true
};
console.log(person);
// 8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
var arr = [1, 11, 15, 58, 69];
arr.push(30);
arr.push(560);
arr.pop();
for (var i in arr) {
    console.log(arr[i]);
}
// 9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.  
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
var selectedColor = Color.Blue;
console.log("Selected Color: ", selectedColor);
// 10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.  
var isNull = null;
var isUndefined = undefined;
console.log("Is Null: ", isNull);
console.log("Is Undefined: ", isUndefined);

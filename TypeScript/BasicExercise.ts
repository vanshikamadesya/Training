// 1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
let names: string = "John";
let age: number = 30;
console.log(names, age);



// 2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.  

let var1: string = 'alice';
const pi: number = 3.14;
var var2: number = 23;
if(true){
  let var1: string = 'john';
  age = 56;
//   pi = 2;
}
console.log(var1);
console.log(var2);
console.log(pi);


// 3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.  
let n1 :number = 58;
let str : string = 'hello';
let bool: boolean = false;
let un: undefined = undefined;
let n2: number = 58;

// add
const sum: number = n1+ n2;
console.log("Sum: ", sum);
// concat
const concat: string = str +"world";
console.log("Concat: ", concat);
// boolean
const isBool: boolean = bool || true;
console.log(isBool);
// undefined
if(un === undefined){
    console.log("undefined");
}else{
    console.log("defined");
}


// 4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.  
let num: number = 85;
// num = 'hello';
console.log(num);



//5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.  
let assignVar = 25;
console.log(typeof assignVar);
// assignVar = 'hello';



// 6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().  
let assertValue : string = '52';
let value: number = parseInt(assertValue);
console.log(value);

let assertValue2: number = 125;
let value2: string = assertValue2.toString();
console.log(typeof value2);


// 7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.  
type Person = {
    name: string;
    age: number;
    isActive: boolean;
}
let person: Person = {
    name: 'John',
    age: 30,
    isActive: true
}
console.log(person);


// 8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
let arr: number[] = [1,11,15,58,69];
arr.push(30);
arr.push(560);
arr.pop();
for(let i in arr ){
    console.log(arr[i]);
}


// 9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.  
enum Color{
    Red,
    Green,
    Blue,
    White,
}
let selectedColor: Color = Color.Blue;
console.log("Selected Color: " ,selectedColor);



// 10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.  
let isNull: null = null;
let isUndefined: undefined = undefined;
console.log("Is Null: " ,isNull);
console.log("Is Undefined: " ,isUndefined);

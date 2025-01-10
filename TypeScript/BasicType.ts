// Number
console.log("\"Number\"")
let first: number = 555;
let second: number = 0x37CF;        // hexadecimal
let third: number = 0o337;          // octa
let fourth: number = 0b111001;      // binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// String
console.log("\"String\"")
let users: string = 'jack';
console.log(users);

// Boolean
console.log("\"Boolean\"")
let isUpdated: boolean = false;
console.log(isUpdated);


// Array
console.log("\"Array\"")
let arrAnimal: string[] = ['dog','cat','monkey'];           // declare using [] method
console.log(arrAnimal);

let arrFruit: Array<string> = ['apple','banana','cherry'];        // declare using generic array type
console.log(arrFruit);

let arrMulti: (string | number)[] = ['dog', 5, 'cat', 91];       // multi type array
console.log(arrMulti);

let arrMulti2: Array<string | number> = ['apple',3, 'guava', 45];
console.log(arrMulti2);


// Tuple
console.log("\"Tuple\"");
var department: [number, string, boolean, number] ;         // declare tuple
department = [1, 'IT', true, 200,];                          // initialize tuple
console.log(department);

var student: [number,string][];                         // tuple array
student = [[1, 'Anam'], [2, 'Neha'], [3,'ANkit']];
console.log(student);


// Enum  --- group related values
console.log("\"Enum\"");

enum Direction{                     // Numeric Enum
    North,  
    East,   
    South, 
    West    
}
console.log(Direction.East);

enum colors{                        // String enum
    red = 'Red',
    green = 'Green',
    blue = 'Blue'
}
console.log(colors.blue);

enum Mixed{
    id = 1,
    city = 'surat'
}
console.log(Mixed.city);


// Union   --- allow more than one type
console.log("\"Union\"");
let code: (string | number);
code = 'abc',
// code = 1
console.log(code)


// Any
console.log("\"Any\"");
let value: any;
value = 123;
value = 'Hello';
value = true;
console.log(value);


// Void
console.log("\"Void\"");
function logMessage(): void{
    console.log('hello')
}
// let speech: void = logMessage();
console.log(logMessage());


// Never
console.log("\"Never\"");
function throwErr(message: string): never{
    throw new Error(message);
}
// throwErr('Something wrong');


// Object
console.log("\"Object\"");
let obj: object;
obj = ['apple', 'cherry','coconut'];        // array are object
obj = {name: 'sneha', age :25};
console.log(obj);

function create(obj2: object ): void{        // function are object
    console.log("Object:", obj2);
}
create({name: 'achal',age: 23});
create([1,13,56]);
// create(42);                  // give error


// unknown
console.log("\"Unknown\"");
let value2: unknown;
value2 = 2;
value2 = 'hello';
console.log(value2);

export{}


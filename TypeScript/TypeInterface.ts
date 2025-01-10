// Type Interface
console.log("\"Type Interface\"")
let a = 10;                 // inferred as num
let b = 'hello';            // inferred as string
let c = true;               // inferred as bool
// a = 'world'              // give error           
console.log(typeof a);


// Type interface in complex object
let arr = [1,3, 'hello'];
arr.push('world');
// arr.push(true)           // give error
console.log(arr);

// Type assertion
console.log("\"Type Assertion\"")
let value: any = 'This is typescript!';
// TypeScript sees 'input' as 'any' and doesn't know it's a string
let length1: number= (<string>value).length;                    // using angle bracket
let length2: number = (value as string).length;                 // using as syntax
console.log(typeof value);
console.log(length1);


// Type assertion with object
interface subject{
    id: number,
    name: string,
}
let obj: any = {id: 101, name: 'Maths'};
let Subject = obj as subject;
console.log(Subject.id);
console.log(Subject.name);
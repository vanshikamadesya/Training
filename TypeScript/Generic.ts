// generic array (array can be of any type)
console.log("\" Generic Array \"")
function getArray<T>(items : T[] ) : T[] {
 return new Array<T>().concat(items);
 }
let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); 
myStrArr.push("Hello TypeScript"); 
console.log(myNumArr);   
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler


// generic with multiple type variable
function combine<T, U>(value1: T, value2: U): string {
    return `${value1} and ${value2}`;
}
const result = combine(5, "apples");
console.log(result); 
  

// Generic class
console.log("\" Generic class \"")

class Box<T> {              // generic class
    value: T;               // generic property
  
    constructor(value: T) {
      this.value = value;
    }

    // static Generic method to return a pair of values of any type
    static wrap<T, U>(item1: T, item2: U): [T, U] {
        return [item1, item2];
    }
    // getValue is a method that returns the value of type T
    getValue(): T {
      return this.value;
    }
}  
const numberBox = new Box(42);    // numberBox has type 'Box<number>'
console.log(numberBox.getValue());
const stringBox = new Box("hello"); // stringBox has type 'Box<string>'
console.log(stringBox.getValue());
const pair = Box.wrap(1,"pencil");  // returns a tuple of type [T, U].
console.log(pair);



// Generic Constraints
console.log("\"Generic Constraints\"")
class Person {
     firstName: string;
     lastName: string;

     constructor(fname:string, lname:string) { 
     this.firstName = fname;
     this.lastName = lname;
     }
}
// display function with generic constraint
// T extends Person. This means that T must be a type that is a subclass of Person
function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per);

//Since the display function is constrained to accept only objects of type Person (or its subclasses), TypeScript will give an error because a string doesn't have the firstName and lastName properties required by the Person class.

// display("Bill Gates"); 


export{}
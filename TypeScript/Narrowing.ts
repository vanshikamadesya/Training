// Type Guard (using typeof)
console.log("\"Type Guard\"")
function logValue(value: string | number): void {
    if (typeof value === "string") {
      console.log(value.toUpperCase()); // Narrow type to string
    } else {
      console.log(value * 2); // Narrow type to number
    }
}  
logValue("hello");
logValue(10);      
  

// Truthiness Narrowing
console.log("\"Truthiness Narrowing\"")
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
}
printAll('hell');
printAll(["apple", "banana", "cherry"]);
printAll(null);



// Equality Narrowing (using ===)
console.log("\"Equality Narrowing\"")
function example(x: string | number, y: string | boolean) {
  if (x === y) {        // narrows x and y to string since that's the only common type in their union.

    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();       
    y.toLowerCase();       
  } else {
    console.log(x);         // x: string | number
    console.log(y);         // y: string | boolean
  }
}
example("hello", "world");
// example("hello", 10);
example("hello", true);



// in operator narrowing
console.log("\"in operator narrowing\"")
// object type
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish): void {
  if ("fly" in animal) {
    // Narrowed to Bird
    animal.fly();
  } else {
    // Narrowed to Fish
    animal.swim();
  }
}
const bird: Bird = { fly: () => console.log("Flying") };
const fish: Fish = { swim: () => console.log("Swimming") };
move(bird); 
move(fish); 



// instanceof narrowing
console.log("\"instanceof narrowing\"")

function logValues(x: Date | string) {
  // The instanceof operator checks if x is an instance of a specific class (Date in this case).
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}
logValues(new Date());
logValues("hello");



// Control flow analysis
console.log("\"Control flow analysis\"")
function examples() {
  // with the type string | number | boolean, meaning x can hold a value of type string, number, or boolean
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
  console.log(x); // Will log a boolean (true or false)
  
  if (Math.random() < 0.5) {
    x = "hello"; // Now allowed, since x is string | number | boolean
    console.log(x); 
  } else {
    x = 100; // Now allowed, since x is string | number | boolean
    console.log(x); 
  }

  return x; // Returns x, which can be a string, number, or boolean
}
examples();



// Type Predicates
console.log("\"Type Predicates\"")  
function isString(value: string | number): value is string {
  return typeof value === 'string';
}

function printLength(value: string | number): void {
  //The isString function is a user-defined type guard, which narrows the type of value to string when isString(value) returns true.

  if (isString(value)) {
    // TypeScript knows 'value' is a string here
    console.log(value.length); 
  } else {
    // TypeScript knows 'value' is a number here
    console.log(value.toFixed(2)); 
  }
}
printLength("Hello, World!");
printLength(12345);    



// Assertions Function
console.log("\"Assertions Function\"")   
function assertIsString(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value is not a string');
  }
}
function printUppercase(value: any): void {
  assertIsString(value); // Asserts that value is a string
  console.log(value.toUpperCase());
}
printUppercase("hello"); 
// printUppercase(123);     // Error: Value is not a string



// Discriminated Union
console.log("\"Discriminated Union\"")
  interface Dog {
    kind: "dog"; // Discriminant
    bark: () => void;
  }
  interface Cat {
    kind: "cat"; // Discriminant
    meow: () => void;
  }

  type Animal = Dog | Cat; // Union of Dog and Cat

  function makeSound(animal: Animal) {
    switch (animal.kind) {
      case "dog":
        animal.bark(); 
        break;
      case "cat":
        animal.meow(); 
        break;
      default:
        // Exhaustiveness checking: if there's an unhandled case
        const exhaustiveCheck: never = animal; // TypeScript will give an error if this line is reached
        throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
  }
  const dog: Animal = { kind: "dog", bark: () => console.log("Woof!") };
  const cat: Animal = { kind: "cat", meow: () => console.log("Meow!") };
  makeSound(dog); 
  makeSound(cat); 


export{}



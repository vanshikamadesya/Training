// Generic Interface
console.log("\"Generic Interface\"")

//interface GenericIdentityFn describes the shape of a function that takes and returns a value of the same type (Type).
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
//identity function is generic, meaning it works with any type passed to it and returns the same type.
function identity<Type>(arg: Type): Type {
    return arg;
}
//automatically infers the type when call the function
let myIdentity: GenericIdentityFn = identity;
let result = myIdentity(42); 
console.log(result);  

let strResult = myIdentity('Hello'); 
console.log(strResult); 



// Generic Parameter Default
console.log("\"Generic Parameter Default\"")

//T = string: The generic parameter T defaults to string.So when no argument is passed, T is inferred as string
function identitys<T = string>(value: T): T {
    return value;
} 
console.log(identitys(42));          
console.log(identitys("Hello"));      
console.log(identitys(true));        
// console.log(identitys());             
  


// Variance Annotation
console.log("\"Variance Annotation\"")
class Animal {
    speak() {
      console.log("Animal speaks");
    }
}
class Dog extends Animal {
    bark() {
      console.log("Dog barks");
    }
}
  
function getAnimal(): Animal {
    return new Animal();
}  
function getDog(): Dog {
    return new Dog();
}
function feedAnimal(animal: Animal): void {
    animal.speak();
}
function feedDog(animal: Animal): void {
    if (animal instanceof Dog) {
        animal.bark();  // Only call bark if it's a Dog
    }
    animal.speak(); // Animal's speak method will always be available
}  
  
//covariant relationship: where a subtype (Dog) can be assigned to a supertype (Animal), program behaves correctly.
let animal: Animal = getDog();  
animal.speak();
  

// Contravariant: A function that accepts an Animal can accept a Dog because Dog extends Animal
let feed: (animal: Animal) => void = feedDog;  // Works, because Dog is a subtype of Animal
feed(new Dog()); 




// keyof type operator
console.log("\"keyof type operator\"")
interface Person {
    name: string;
    age: number;
    isActive: boolean;
}
  
type PersonKeys = keyof Person;  // "name" | "age" | "isActive" --- return union of keys

let key: PersonKeys;
key = "name";
console.log(typeof key);


// index type
console.log("\"index type\"")
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
//indexed access type to extract the type of an element in the array
type Persons = typeof MyArray[number];    
type Age = typeof MyArray[number]["age"];   
// Or
type Age2 = Person["age"];
      


// conditional type
console.log("\"conditional type\"")
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string;     
type Example2 = RegExp extends Animal ? number : string;



type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num = GetReturnType<() => number>; 
type Str = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;



// mapped type
console.log("\"mapped type\"")
interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

type OptionalPerson = {
  [Key in keyof Person]?: Person[Key];
};
// const optionalPerson: OptionalPerson = {
//   name: "John",
// };
// console.log(optionalPerson);

type ReadonlyPerson = {
  readonly [Key in keyof Person]: Person[Key];
};

// const readonlyPerson: ReadonlyPerson = {
//   name: "John",
//   age: 30,
//   isActive: true,
// };
// // readonlyPerson.age = 25; // ❌ Error: Cannot assign to 'age' because it is a read-only property
// console.log(readonlyPerson); 


type PrefixedKeys = {
  [Key in keyof Person as `prefix_${Key}`]: Person[Key];
};
const prefixedKeys: PrefixedKeys = {
  prefix_name: "John",
  prefix_age: 30,
  prefix_isActive: true
};
console.log(prefixedKeys);



// template literal type
console.log("\"template literal type\"")
type Greeting = `Hello ${string}`;
const greeting: Greeting = "Hello TypeScript";
console.log(greeting);


type Color = "red" | "green" | "blue";
type ColoredItem = `color-${Color}`; 

const redItem: ColoredItem = "color-red"; 
const blueItem: ColoredItem = "color-blue"; 
// const yellowItem: ColoredItem = "color-yellow";

export{}
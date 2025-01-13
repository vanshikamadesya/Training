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
  
type PersonKeys = keyof Person;  // "name" | "age" | "isActive"
// type PersonValues = typeof Person;

let key: PersonKeys;
key = "name";
console.log(typeof key);
export{}
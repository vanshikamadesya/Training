// Interface
console.log("\"Interface\"")

interface Users{
    id: number;
    name: string;
    readonly designation: string            // readonly property
    age?: number;                           // optional property
    // added parameter name
    getFullName(prefix: string): string;            // interface with method
}
let u: Users = {
    id: 1,
    name: 'neha',
    designation: 'HR',
    getFullName(prefix: string) {
        return `${prefix} ${this.id} ${this.name} ${this.designation}`;
    }
};
console.log(u.getFullName('User: '));


// Extending interface
console.log("\"Extending Interface\"")

interface Emp extends Users{        
    dept: string;
}
const emp: Emp = {
    id: 2,
    name: "aman",
    age: 25,
    dept: "IT",
    designation: "TL",
    getFullName(prefix: string){
        return `${prefix} ${this.id} ${this.name} ${this.age}  (${this.dept}) ${this.designation}`;

    }
};
console.log(emp.getFullName('Employee: '));



// Interface with func type
console.log("\"Interface with func type\"")

interface AddFunc {
    (a: number, b: number): number; // Function signature specifying the return type
}
function addNum(a: number, b: number): number {
    console.log('addNum: a = ' + a + ', b = ' + b);
    return a + b;
}
let add: AddFunc = addNum; // Assign the function to the interface
const result = add(45, 89); // Call the function
console.log('Result:', result); 


// Implementing interface
console.log("\"Implementing Interface\"")
interface Vehicle {
    brand: string;
    speed: number;
    move(): void;
}
class Car implements Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    move(): void {
      console.log(`${this.brand} is moving at ${this.speed} km/h.`);
    }
}
const myCar = new Car("Toyota", 120);
myCar.move(); 
  



// Class
console.log("\"CLass\"")  

class Animal {
    name: string;
  
    // Constructor to initialize the object
    constructor(name: string) {
      this.name = name;
    }

    // Method to display animal details
    getDetail(): string{
        return `${this.name}`;
    }
    // method to display message
    speak(): void {
      console.log(`${this.name} makes a sound`);
    }
}
// instantiating animal class
const animal = new Animal("Monkey");
console.log(animal.getDetail());
console.log(animal.speak());
  

// Extending Class
console.log("\"Extending CLass\"")  

class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name); // Call constructor of the parent(Animal) & initial property name
      this.breed = breed;
    }
    // Overriding speak method
    speak(): void {
      console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); 
  


// Static member  --   call the static method directly without creating an instance
console.log("\"Static member\"")  
class MathUtility {
    static add(a: number, b: number): number {
      return a + b;
    }
  
    static multiply(a: number, b: number): number {
      return a * b;
    }
}
//call the static methods directly on the class 
console.log(MathUtility.add(2, 3)); 
console.log(MathUtility.multiply(2, 3)); 
  


// Abstract class  --- cannot be instantiated directly
console.log("\"Abstract class\"")  
// abstract method are those without an implementation, that must be implemented by subclasses.
abstract class Shape {
    abstract getArea(): number;
}
  
class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
}
  
const circle = new Circle(5);
console.log(circle.getArea()); 
  

export{}

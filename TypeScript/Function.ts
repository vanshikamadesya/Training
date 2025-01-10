// named function
console.log("\" Named Function\"")
function mul(x: number, y: number): number{
    return(x*y);
}
console.log(mul(2,3));


// anonymus function
console.log("\" Anonymus Function\"")
let Sum = function(x: number, y: number): number{
    return x + y;
}
console.log(Sum(5,9));


// optional parameter
console.log("\" optional parameter\"")
function greet(name: string, age?: number): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age} years old.`;
    } else {
      return `Hello, ${name}.`;
    }
} 
console.log(greet("Vanshika", 25)); 
console.log(greet("John"));        
  

// Default parameter
console.log("\" default parameter\"")
function greets(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greets("Vanshika"));     
console.log(greets("John", "Hi"));    


// Rest Paremetr
console.log("\" Rest parameter\"")
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n*x);
}
console.log(multiply(1, 2, 3, 4)); 
console.log(multiply(5, 10));      


// Spread syntax
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); 


// Parameter Destructing
console.log("\" Parameter Destructing \"")
type User = {
    name: string;
    age: number;
    country: string;
};
//{ name, country }: User destructures the name and country properties from the user object.
function greetUser({ name, country }: User): string {
    return `Hello ${name} from ${country}!`;
}
const users = { name: "vansh", age: 25, country: "India" };
console.log(greetUser(users)); 
  

// Arrow Function
console.log("\" Arrow Function \"")
let sub = (x: number, y: number):number =>{
    return x-y;
}
console.log(sub(79,7));



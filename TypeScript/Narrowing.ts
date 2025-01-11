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
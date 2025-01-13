// Equality Narrowing
console.log("\"Equality Narrowing\"")
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // x and y can only be string here
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    } else {
        console.log(x); // x: string | number
        console.log(y); // y: string | boolean
    }
}
example("hello", "hello");
example("world", true);
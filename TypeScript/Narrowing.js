// Type Guard (using typeof)
console.log("\"Type Guard\"");
function logValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // Narrow type to string
    }
    else {
        console.log(value * 2); // Narrow type to number
    }
}
logValue("hello");
logValue(10);
// Truthiness Narrowing
console.log("\"Truthiness Narrowing\"");
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll('hell');
printAll(["apple", "banana", "cherry"]);
printAll(null);

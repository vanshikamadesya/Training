// Difference between Union and Intersection Types

type A = { name: string };
type B = { age: number };

type Union = A | B;       
type Intersection = A & B; 

// Union: Only one type's properties are required.
const u1: Union = { name: "Alice" }; // Valid
const u2: Union = { age: 25 };       // Valid
const u3: Union = { name: "Alice", age: 25 }; // Valid

// Intersection: All properties from both types are required.
const i1: Intersection = { name: "Alice", age: 25 }; // Valid
// const i2: Intersection = { name: "Alice" };          // Invalid (missing age)
// const i3: Intersection = { age: 25 };                // Invalid (missing name)


// Exclude
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>;

const shapes: Shape[] = [
  { kind: "square", x: 10 },
  { kind: "triangle", x: 6, y: 8 }
];
console.log("T3 shapes:", shapes);


// Extract
type T0 = Extract<"a" | "b" | "c", "a" | "f">;             // "a"
type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shapes, { kind: "circle" }>  // type T2 = {  kind: "circle";  radius: number;  }
    
     

// NonNullable
type T4 = NonNullable<string | number | undefined | null>; // string | number

// ReturnType
type T5 = ReturnType<() => string>; // string
type T = ReturnType<<T extends U, U extends number[]>() => T>; // type t = number[]

declare function f1(): { a: number; b: string };
type T6 = ReturnType<typeof f1>;  // { a: number; b: string }



// Parameters
function add(a: number, b: string): string {
    return a + b;
}
type AddParam = Parameters<typeof add>; // [number, string]
const addParams: AddParam = [45,'hello']
console.log(addParams)



// InstanceType
class C {
    x = 0;
    y = 0;
}
type T7 = InstanceType<typeof C>;  // C
const t7: T7 = new C();
console.log(t7)



// Partial
type T8 = Partial<{ a: number; b: string }>; // { a?: number; b?: string }
const t8: T8 = { a: 1 };
console.log(t8)

interface Person {
    name: string;
    age: number;
    occupation: string;
}
// Using Partial to make all properties optional
const personPartial: Partial<Person> = {
    name: "Alice" // Only `name` is provided, others are optional
};
console.log(personPartial)
  
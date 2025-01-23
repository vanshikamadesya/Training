// Exercise 14

// Error: test.ts(5,12): error TS2344: Type 'false' does not satisfy the constraint 'true'.
// This error indicates a mismatch in type inference between the mapper function and the expected output. It's caused by incorrect type handling in the map function, specifically when mapper is invoked on the elements of the input array.

// Error: test.ts(4,20): error TS2554: Expected 2 arguments, but got 0.
//This error happens because map() is being called with no arguments. However, your map function expects at least one argument (mapper). Since you're calling it as map()(), it doesn't align with your function's definition. The map function does not currently support partial application for both mapper and input.



// 1
// Made input optional to handle the case where only the mapper function is provided.

export function map<T, U>(mapper: (item: T) => U, input?: T[]): ((subInput: T[]) => U[]) | U[] {
    if (arguments.length === 0) {
    
      //  TypeScript would normally not allow returning the function itself as the result of a function that has a different return type (T[] | ((subInput: T[]) => T[])).
      //  as any is a workaround to tell TypeScript to ignore type checking and allow returning the function itself (in this case, filter).
        return map as any;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): U[] {
            if (arguments.length === 0) {
                return subFunction as any;
            }
            return subInput.map(mapper);
        };
    }
    return input!.map(mapper);
}




// 2
// input: T[]: This is the array to be filtered, which is an array of type T[].
// filterer: (item:T)=> boolean: This is the function that determines which items to keep in the filtered array. It takes an item of type T and returns a boolean value.
// output: T[] | ((subInput: T[])=>T[]): The function can return either an array of type T[] or a function that takes an array of type T[] and returns an array of type T[].
// T is used because you’re working with arrays of items of type T and returning an array of type T[].
// U is used because you’re working with arrays of items of type U and returning an array of type U[].
export function filter<T,U>(filterer: (item:T)=> boolean, input: T[]): T[] | ((subInput: T[])=>T[]) {
    if (arguments.length === 0) {
        return filter as any;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): T[] {
            if (arguments.length === 0) {
                return subFunction as any;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}



// 3
export function reduce<T, U>( reducer: (accumulator: U, currentValue: T, index: number, array: T[]) => U, initialValue?: U, input?: T[]):U | ((subInput: T[]) => U) 
{
    if (arguments.length === 0) {
        return reduce as any;
    }
    if (arguments.length === 1) {
        return function (subInput: T[]): U {
            return subInput.reduce(reducer, initialValue!);
        };
    }
        if (arguments.length === 2) {
        return function (subInput: T[]): U {
            return subInput.reduce(reducer, initialValue!);
        };
    }
    return input!.reduce(reducer, initialValue!);
}



// 4 & 5
// Type inferring in the return type
export function subtract(a: number, b: number) {
    if (arguments.length === 0) {
        return subtract;
    }
    if (arguments.length === 1) {
        return function subFunction(subB:number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a - subB;
        };
    }
    return a - b;
}




// 6

// U extends keyof T:  is a generic type that must be a valid key of T. This ensures that propName is a key in the obj.
// typeof prop: If no arguments are passed to the function, it returns the function itself (prop) for later use.
// ((subPropName: keyof T) => T[keyof T]): The function can return another function that accepts a key from the           object (subPropName) and returns the value of that key.
// T[U]: If both obj & propName are provided,function directly returns the value of the property (propName) in the object (obj).

export function prop<T, U extends keyof T>(obj:T, propName: U): ((subPropName: keyof T) => T[keyof T]) | T[U] | typeof prop {
    if (arguments.length === 0) {
        return prop;
    }
    if (arguments.length === 1) {
        return function subFunction(subPropName: keyof T): T[keyof T] {
            if (arguments.length === 0) {
                return subFunction as any;
            }
            return obj[subPropName];
        };
    }
    return obj[propName];
}



// 7
// pipe is a utility function that takes multiple functions as arguments and chains them together.
// The result of one function becomes the input to the next.
// ...functions: Array<(arg :T) => U>: This is a rest parameter that allows the function to accept any number of arguments.
// (arg : T)=>U: The function returns another function that takes an argument of type T and produces a final result of type U.


export function pipe<T,U>(...functions: Array<(arg :T) => U>): (arg : T)=>U {
    if (arguments.length === 0) {
        return pipe as any;
    }
    return function subFunction(arg: T):U {
        let result : any;
        for (const func of functions) {
            result = func(result); 
        }
        return result as any;
    };
}





// Exercise 15

// <T extends object>: This is a generic constraint. It means that the type T must be an object type. This ensures that the class can only manipulate objects and not other types like numbers or strings.
// The constructor takes a parameter obj of type T and stores it in a protected property obj.
export class ObjectManipulator<T extends object> {
    constructor(protected obj: T) {}

// <K extends string, V>: Declares two generics:
    // K: The name of the new property, constrained to be a string.
    // V: The type of the value for the new property.

    // <T & Record<K, V>>: Combines the original object type (T) with the new property type (Record<K, V>), resulting in an updated object type.
        //type Original = { name: string };
        //type Updated = Original & Record<'age', number>;
    // The set method returns a new ObjectManipulator instance with the updated object type (T & Record<K, V>), ensuring the type system knows about the new property.

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & Record<K, V>> {
// { ...this.obj, [key]: value }: Uses the spread operator to create a new object by copying all existing properties of this.obj and adding the new key-value pair.
// as T & Record<K, V>: Ensures TypeScript understands that the new object includes both the original properties and the new property.
        return new ObjectManipulator({ ...this.obj, [key]: value } as T & Record<K, V>);
    }

    //<K extends keyof T>: K is a key that exists in the object T.It is constrained by keyof T, which means K must be a key that exists in the object T.
    //T[K]: returns the value of the property specified by the key K from the object T.
    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

// ObjectManipulator<Omit<T, K>>: Returns a new ObjectManipulator where the object type has the key K removed. The Omit utility type creates a new type excluding the specified key.
    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}





// Exercise 10

// Union of ApiResponse: A union type that can be either a success or an error.
export type ApiResponse<T> =
    | {
          status: 'success';
          data: T;
      }
    | {
          status: 'error';
          error: string;
      };

// promisify<T>: <T> is a generic type parameter. It allows the function to work with any type of data.
// <T>: The type T will represent the type of the data that the callback function returns ( Admin[], User[], or number)..
//fn: (...args: any[]) => void
    // fn is the input to the promisify function.
    // It represents a callback-based function that:
    // Takes an unknown number of arguments (...args: any[]).
    // Ends with a void return type because the result is delivered via a callback, not directly returned.

// (...args: any[]) => Promise<T>:  The returned function takes any number of arguments and returns a Promise that resolves to the type T.

export function promisify<T>(fn: (...args: any[]) => void): (...args: any[]) => Promise<T> {
    return (...args: any[]) => {
        return new Promise<T>((resolve, reject) => {
            const callback = (response: ApiResponse<T>) => {
                if (response.status === 'error') {
                    reject(new Error(response.error));
                } else {
                    resolve(response.data);
                }
            };
            fn(...args, callback); // Call the original function, passing the new callback.
        });
    };
}

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};

// Converts the callback-based oldApi methods into Promise-based methods using promisify.
//promisify ensures we can use await instead of callbacks.
export const api = {
    requestAdmins: promisify<Admin[]>(oldApi.requestAdmins),
    requestUsers: promisify<User[]>(oldApi.requestUsers),
    requestCurrentServerTime: promisify<number>(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify<number>(oldApi.requestCoffeeMachineQueueLength)
};

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();

    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();

    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    try {
        console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
    } catch (e) {
        console.log(`   Error: ${(e as Error).message}`);
    }
}

startTheApp().then(
    () => {
        console.log('Success!');
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
    }
);


// Callback-based functions require nested callbacks, which can lead to callback hell and make the code harder to read and maintain.
// Promises (created by promisify) allow us to use async/await, leading to cleaner, linear, and easier-to-read code.




// Type Annotation ---- variable are declare with datatype
var names : String = 'ankit';
console.log(names);
var age: Number =  25;
console.log(age);
var isUpdated: boolean = true;
console.log(isUpdated);


// Type annotation in object
var subject : {
    id: Number,
    name: String,
    marks: Number, 
};
subject = {
    id: 1,
    name: 'maths',
    marks: 60
}
console.log(subject)


// Return type annotation
function getNumber(): Number{
    return 30;
}
console.log(getNumber());
export{}
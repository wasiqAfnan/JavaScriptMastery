/*
In JavaScript, objects, arrays, and functions are stored as reference types. 
When you assign them to another variable, only the reference (memory address) is copied,
not the actual data.



Shallow Copy (Same Reference)
A shallow copy copies the reference, meaning both variables point to the same object.
*/

let obj1 = { name: "Wasiq" };
let obj2 = obj1; // Copies reference
obj2.name = "Afnan";

console.log(obj1.name); // "Afnan" (original object also changes)


// Deep Copy (New Object): To create an independent copy

// Using `Object.assign()` (Only works for shallow objects)

// let obj1 = { name: "Wasiq" };
// let obj2 = Object.assign({}, obj1);
// obj2.name = "Afnan";

console.log(obj1.name); // "Wasiq" (original remains unchanged)


// Using Spread Operator (`...`)
   
// let obj1 = { name: "Wasiq" };
// let obj2 = { ...obj1 };
// obj2.name = "Afnan";

console.log(obj1.name); // "Wasiq"
   
/*
Using `JSON.parse(JSON.stringify(obj))`
(Works for nested objects but removes functions)
*/
// let obj1 = { name: "Wasiq", details: { age: 25 } };
// let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.age = 30;
console.log(obj1.details.age); // 25 (original remains unchanged)




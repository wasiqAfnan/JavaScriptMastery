// JavaScript provides three types of Reference values that include Array, Object, and Function.

// Reference types are more complex and are stored as references to memory locations. When you manipulate an object, you are working with a reference to that object rather than the actual object itself.

// When you copy a variable that holds a reference to an object (a referenced type) to another variable, both variables now reference the same object in memory. As a result, if you modify the object through one variable, the changes will be reflected in the other variable as well.

let arr = [25,68,"rohit"];
// copying arr to arr2
let arr2 = arr;
console.log(arr);
console.log(arr2);

// changing the value of arr2. But chnage will reflect both in arr and in arr2
arr2[2] = "rohan";
console.log(arr);
console.log(arr2);
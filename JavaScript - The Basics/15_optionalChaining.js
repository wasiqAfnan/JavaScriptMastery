/**
 * Optional chaining is a feature introduced in ECMAScript 2020 (ES11) that provides a way to safely access 
 * nested properties of an object without the need for manual checks at each level of nesting. This is 
 * particularly useful when dealing with objects that may have nested structures, where some properties might be
 * null or undefined.
 */

let userDetails = {
    userName:"Wasiq Afnan",
    age:99,
    // address:{
    //     city:"Delhi",
    //     area:"Karolbagh",
    //     zipcode:"7000558"
    // }
}

// Accessing nested property without optional chaining
// This would throw an error if 'address' or 'zipCode' is null or undefined
// let zipcode = userDetails.address.zipcode
// console.log(zipcode);// TypeError: Cannot read properties of undefined (reading 'zipcode')

// This is where optional chaining comes in

// Using optional chaining to safely access nested property
let zipcode = userDetails.address?.zipcode;
console.log(zipcode); // Using optional chaining to safely access nested property
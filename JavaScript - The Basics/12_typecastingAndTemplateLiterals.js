/**
 * Typecasting: It is technique to convert one data type into another
 */
let a = 5;
console.log(typeof a);// Number
let b = String(a); // typecast from Number to String
console.log(typeof b); // String


let c = "5"
console.log(typeof c);// String
let d = Number(c); // typecast from String to Number
console.log(typeof d);// Number

/**
 * Template literals: It is a printing technique in which we can give any variable
 * name under braces to print the value of the variable with some strings
 * without concatenating again and again. It is used when we want to print some text
 * with some variable values
 */


let uName = "Wasiq Afnan";
let age = "80";
let address = "Bangalore"
// Printing without using template literal
console.log("User Name: "+uName+"\n"+"Age: "+age+"\n"+"Address: "+address+"\n");

// Printing using template literal
console.log(`User Name: ${uName} \nAge: ${age} \nAddress:${address}`);

/**
 * Using template literals in this use case is far more readable an convenient than
 * using concatenation(+)
*/


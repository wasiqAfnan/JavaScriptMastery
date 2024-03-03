// JavaScript provides six types of primitive values that include Number, String, Boolean, Undefined, Symbol, and BigInt.

//variables that are primitive are accessed by Value. When we assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable.so if we change the value of the send variable then the value of actual variable does not change

let name = "myname";
let name2 = name;// copying name to name2

console.log("Before updating name2")
console.log(name)
console.log(name2)

// chnaging value of name2 and as name and name2 are primitive in nature thus changing the value of name 2 will not affect the value of name variable
name2 = "yourname";

console.log("After updating name2")
console.log(name2)
console.log(name)

// now let us take an example of each of the primitive data types

let a = 5;
let b = 5.5;
let c = "hey";
let d = 'a';
let e = 1234567890;
let f = true;
let g;
let h = Symbol("fooo");

console.log(a + " " + typeof a);
console.log(b + " " + typeof b);
console.log(c + " " + typeof c);
console.log(d + " " + typeof d);
console.log(e + " " + typeof e);
console.log(f + " " + typeof f);
console.log(g + " " + typeof g);
console.log(h);




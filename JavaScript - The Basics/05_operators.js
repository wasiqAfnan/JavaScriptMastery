/* There are basically 4 types of operators in JS
    1) Arithmetic Operators
    2) Comparison Operators
    3) Assignment Operators
    4) Logical Operators
*/

// 1) Arithmetic Operators

let x = 5;
let y = 7;

console.log(`${x} + ${y} = ` + (x+y));
console.log(`${x} - ${y} = ` + (x-y));
console.log(`${x} * ${y} = ` + (x*y));
console.log(`${x} / ${y} = ` + (x/y));
console.log(`${x} % ${y} = ` + (x%y)); // return remiander
console.log(`${x} ** ${y} = ` + (x**y)); // return x^y

// 2) Comparison Operators

console.log(`${x} > ${y} = ` + (x>y)); // Greater than
console.log(`${x} >= ${y} = ` + (x>=y)); // Greater than equalto
console.log(`${x} < ${y} = ` + (x<y)); // less than
console.log(`${x} <= ${y} = ` + (x<=y)); // less than equalto
console.log(`${x} == ${y} = ` + (x==y));  // equalto equalto
console.log(`${x} != ${y} = ` + (x!=y));  // not equalto
console.log(`${x} === ${y} = ` + (x===y));  // if we want to compare a number with a string than this syntax is used
console.log(`${x} !== ${y} = ` + (x!==y));  // if we want to compare a number with a string than this syntax is used

// 3) Assignment Operators

let a = 5;
let b = 7;

a = b; // assigns value of b into a
a += b;// first compute a + b then assign the result into a
a -= b;// first compute a - b then assign the result into a
a *= b;// first compute a * b then assign the result into a
a /= b;// first compute a / b then assign the result into a
a %= b;// first compute a % b then assign the result into a
a **= b;// first compute a ** b then assign the result into a


// 4) Logical Operators

// logical and '&&' return true if all condition are true else it will return false

/* 
logical or '||' return false if all conditions are false else return true or we can 
say if any one of the condition is true the logical or operator will result in true else
it will false
*/

/*
 logical not '!' return false if result is true and return true if result is false. 
We can say it we alter the current condition. If current condition is true it will alter 
it to false and If current condition is false it will alter it to true.
*/

let b1 = true;
let b2 = false;

console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1);
console.log(!b2);

//-------------------------------------------------xxxxxxxx-----------------------------------------------------------------
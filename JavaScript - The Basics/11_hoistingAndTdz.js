// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. It's important to note that only the declarations are hoisted, not the initializations. 

// TDZ stands for "Temporal Dead Zone" in the context of hoisting in JavaScript. The Temporal Dead Zone is a specific behavior related to the hoisting of variables declared using let and const.with let and const, the situation is different. While they are hoisted as well, there is a period between the start of the scope and the actual declaration where accessing the variable results in a ReferenceError. This period is called the Temporal Dead Zone.


// 1) Hoisting using var keyword

console.log(x); // we are accessing value of x before declaring variable x. But this will not give error as variable declare using var is being hoisted. this line will print undefined
var x = 5;
console.log(x); // this will print 5


// 2) Normal Function hoisting: in function hoisting both the function declaration and funciton defination are hoisted. so we can call any function before decalaring it later.

greet();// Hey,User
function greet(){
    console.log("Hey,User");
}
greet();// Hey,User

// 3) Hoisting using let and const keyword: variable declare using let and const is hoisted but it is in the TDZ or Temporal Dead Zone. That is why if we try to access the variable before decalring it, then it will give reference error.

// console.log(z);ReferenceError: Cannot access 'z' before initialization
let z=45;
console.log(z); // 45

// console.log(c);ReferenceError: Cannot access 'z' before initialization
const c=5;
console.log(c); // 5

// 4) Arrow Function Hoisting: in this case The variable declaration is hoisted, but the assignment (the function itself) stays in place, leading to a temporal dead zone until the assignment is encountered in the code. This behavior is different from traditional function declarations where the entire function is hoisted. This means the variable that have the arrow function is hoisted but only the decalartion not the defination that is why calling arrow function before decalaration gives reference error.

// a();ReferenceError: Cannot access 'a' before initialization
let a = ()=>{
    console.log("This is an arrow fucntion output");
}
a();//This is an arrow fucntion output

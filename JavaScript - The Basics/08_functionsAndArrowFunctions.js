// Normal functions 
function add(a,b,c){
    return a+b+c
}

console.log(add(5,4,8));

// Advantages of Arrow Functions:

// 1.Concise Syntax:
//    - Shorter syntax, reducing boilerplate code.

// 2.Implicit Return:
//    - Automatically returns the result of a single expression without needing `return`.

// 3.No Binding of `this`:
//    - `this` is lexically scoped, making it inherit from the enclosing scope.

// 4.No `arguments` Object:
//    - Arrow functions do not have their own `arguments` object; they inherit it from the enclosing scope.

const add2 = (a,b,c) => a+b+c;

console.log(add2(15,8,7));


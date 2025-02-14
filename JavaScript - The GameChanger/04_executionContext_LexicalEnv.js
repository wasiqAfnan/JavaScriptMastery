/*
Execution Context
An execution context is an environment in which JavaScript code is executed. There are three types:

Global Execution Context (GEC)

Created when the script starts execution.
Contains global variables and functions.
this in GEC refers to the global object (window in browsers, global in Node.js).
Function Execution Context (FEC)

Created whenever a function is called.
Each function has its own execution context.
Eval Execution Context (Rarely used)

Created when eval() is executed.
Each execution context has:

Memory/Variable Environment: Stores variables and function declarations.
Thread of Execution: Where the code runs line by line.

Not understood yet? 
Read this article: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
*/

/*
Lexical Environment
A lexical environment is created whenever a function is executed. It consists of:

Local Memory (Variables, Functions)
Reference to Outer Lexical Environment (Closure)
*/

function outer() {
    let a = 10;
    function inner() {
        console.log(a); // 10 (accesses outer lexical environment)
    }
    inner();
}
outer();


// Here, inner() has access to a due to lexical scoping

// For deep-dive this topic follow the below links: 
// Article 1: https://medium.com/@mohdtalib.dev/lexical-environment-in-javascript-a2112b78a3cb
// Article 2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
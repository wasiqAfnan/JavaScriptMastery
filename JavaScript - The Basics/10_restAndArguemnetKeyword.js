// arguments Keyword:The arguments keyword in JavaScript is a special variable available within the body of a function. It holds all the arguments passed to the function, regardless of the number of parameters defined in the function declaration.

// The arguments object is automatically created for every function, and it allows you to access all the parameters passed to the function, even if the function doesn't explicitly declare those parameters.

function sayHi() {
    console.log(arguments, arguments.length);
    console.log(arguments[0]);
}

sayHi("Afnan", 25, 64); // Output: [Arguments] { '0': 'Afnan', '1': 25, '2': 64 } 3
// Afnan

// rest Keyword:the rest parameter allows you to represent an indefinite number of arguments as an array. It is introduced using the ellipsis (...) followed by the parameter name and must be the last parameter in the function parameter list. The rest parameter collects all the remaining arguments into an array,

function restExample(a, b, ...rest) {
    console.log(a, b, rest);
}
restExample(5, 2, "afnan", 25, "hey"); // Output: 5 2 [ 'afnan', 25, 'hey' ]

// we can also use rest parameter in array function

const restExampleArray = (...numbers) => {
    console.log(numbers, numbers.length);
};
restExampleArray("Wasiq", 25, 64, "mohan"); // Output: [ 'Wasiq', 25, 64, 'mohan' ] 4

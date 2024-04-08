/*
to install readline-sync package open your terminal and type "npm i readline-sync"
*/
// importing the readline-synch module
const readline = require('readline-sync');
// asking user to enter name
let name = readline.question("What is your name? ");
console.log(`Your name is ${name}`);

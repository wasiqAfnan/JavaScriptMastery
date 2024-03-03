// in js we can declare a variable in 3 ways by using var,let and const

var myVar = 45;
{
    let myVar2 = 5;
    const myConst = "amal";
    console.log(myVar);//45
    console.log(myVar2);//5
    console.log(myConst);//amal
}
console.log(myConst);// this will give error as const is block scoped
console.log(myVar2);// this will give error as let is block scoped

// The variables that are defined with var statement have function scope. if we declare a variable usig var it will add the variable in window object so it can be acessed globally.

// let is block scoped it means a variable declare using let is only accessible under the block. We can't use the variable outside the block.

// const is also block scoped it means a variable declare using const is only accessible under the block. We can't use the variable outside the block. furthermore a variable decalre using const can't be updated once it's defined.
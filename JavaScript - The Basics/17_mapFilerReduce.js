/**
 * The map method creates a new array by applying a function to each element of the original array. 
 * It iterates over each element of the array and applies the provided function to it, 
 * then returns a new array containing the results.
 */

let myArr = [1,2,3,4,5,6,7,8,9,10];
let powerArr = myArr.map(function(num){
    return num * num;
})
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(powerArr) // [1,  4,  9, 16, 25, 36, 49, 64, 81, 100]

/*
The filter method creates a new array containing only the elements of the original array that satisfy a 
specified condition. It iterates over each element of the array and applies the provided function, 
returning a new array containing only the elements for which the function returns true.
*/

let filteredArr = myArr.filter((num)=>{
    return num % 2 === 0;
})
console.log(filteredArr); // [ 2, 4, 6, 8, 10 ]

/**
 * The reduce method applies a function to each element of the array, resulting in a single output value. 
 * It iterates over each element of the array and accumulates a result by applying the provided function 
 * to each element and the accumulated value (initially provided) at each step.
 */

let reducedArr = myArr.reduce((accumulated,currentValue)=>{
    return accumulated + currentValue;
},0)
console.log(reducedArr); // 55 (here 0 in the second arg of reduce function is actually the initial value of the accumulator)
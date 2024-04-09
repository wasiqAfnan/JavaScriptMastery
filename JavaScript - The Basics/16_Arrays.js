/**
 * Array Declaration
 */

// Array with Constructor
let arr = Array(25,68);
console.log(arr); // [ 25, 68 ]

// Array with Predefined Length:
let arr2 = new Array(3);
arr2 = [25,68,97];
console.log(arr2);// [ 25, 68, 97 ]

// Array with Elements
let arr3 = [54,98,"Mango"];
console.log(arr3);// [ 54, 98, 'Mango' ]

// Using Array Methods
let arr4 = Array.from("hello");
console.log(arr4);// [ 'h', 'e', 'l', 'l', 'o' ]

/**
 * Array methods
 */

let myArr = [12,16,18];
console.log(myArr); // [ 12, 16, 18 ]
myArr.push(6);// pushes 6 to the last of the array
console.log(myArr);// [ 12, 16, 18, 6 ]

let poppedElement = myArr.pop(); // popped last element of the array and  returns the popped element
console.log(myArr); // [ 12, 16, 18 ]
console.log(poppedElement);// 6

myArr.unshift(25);// pushes 25 at the starting of the array
console.log(myArr);// [ 25, 12, 16, 18 ]

let shiftElem = myArr.shift();// delete first element of the array and returns the shifted element
console.log(myArr);// [ 12, 16, 18 ]
console.log(shiftElem); // 25

let slicedArr = myArr.slice(1,3); // cut the array starting from 1 index to 3 index but excluding 3 index
console.log(slicedArr);// [ 16, 18 ]

let result = myArr.includes(25); // return true if 25 present in the array else returns false
console.log(result);// false

let joinedArr = myArr.join(" , ");// joined method returns string with sepertator provided.
console.log(joinedArr); // 12 and 16 and 18 (using and seperator). also 12 , 16 , 18 (using comma seperator)

// Sorting a numeric array
/**
 * sort method in array sorts an array in alpahabetocal order. e.g. This works well for strings 
 * ("Apple" comes before "Banana").
 * But If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
 * This is why we need to provide a function to sort the array
 */

let numericArr = [25,15,1,87,100,26,47];
let ascendingSortedArr = numericArr.sort((a,b)=>a-b); // Ascending order
console.log(ascendingSortedArr);


let descendingSortedArr = numericArr.sort((a,b)=>b-a); // Descending order
console.log(descendingSortedArr)
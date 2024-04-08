/*
In JavaScript, an object is a composite data type that allows you to store multiple key-value pairs within 
a single entity. Objects are one of the most fundamental and versatile concepts in JavaScript, and they play 
a central role in the language.
*/

// creating an object

let userDetails = {
    userName: "Afnan",
    userAge: 99,
    userMail: "dummy@dummy.com",
    userPhone: 9874563210,
    userType: "Admin"
}

console.log(userDetails);
/* Output:
{
    userName: 'Afnan',
    userAge: 99,
    userMail: 'dummy@dummy.com',
    userPhone: 9874563210,      
    userType: 'Admin'
}
*/

// to access individual element of an object use dot(.) notation and then the key to access the value
console.log(userDetails.userName);  // Afnan
// Alternative syntax
console.log(userDetails['userAge']); // 99

// some methods of an object

// To get all the keys of an object
let keys = Object.keys(userDetails)
console.log(keys);// [ 'userName', 'userAge', 'userMail', 'userPhone', 'userType' ]

// To get all the values of an object
let values = Object.values(userDetails)
console.log(values);// [ 'Afnan', 99, 'dummy@dummy.com', 9874563210, 'Admin' ]

// To get all the entries of an object
let entries = Object.entries(userDetails)
console.log(entries);
/* output:
[
    [ 'userName', 'Afnan' ],
    [ 'userAge', 99 ],
    [ 'userMail', 'dummy@dummy.com' ],
    [ 'userPhone', 9874563210 ],
    [ 'userType', 'Admin' ]
]
*/



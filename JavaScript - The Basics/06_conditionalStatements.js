// if else Statement

let a = 5;
let b = 7;

if (a > b) {
    console.log(`${a} is greter than ${b}`);
}
else {
    console.log(`${b} is greter than ${a}`);
}

// if elseif else Statement

let age = 13;

if (age >= 18) {
    console.log(`You can watch the movie because your age is ${age}`);
}
else if (age < 18 && age >= 14) {
    console.log(`You can watch the movie but with your parents pemission because your age is ${age}`);

}
else {
    console.log(`You can not watch the movie because you age is ${age}`);

}

// Nested if

let num1 = 554, num2 = 64, num3 = 25;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is the greatest number between the 3`)
    }
    else {
        console.log(`${num3} is the greatest number between the 3`)
    }
}
else {
    if (num2 > num3) {
        console.log(`${num2} is the greatest number between the 3`)
    }
    else {
        console.log(`${num3} is the greatest number between the 3`)
    }

}

// Switch Case Statement

let rating = 36;

switch (rating) {
    case 1: console.log("You have given us 1 star");
        break;

    case 2: console.log("You have given us 2 star");
        break;

    case 3: console.log("You have given us 3 star");
        break;

    case 4: console.log("You have given us 4 star");
        break;

    case 5: console.log("You have given us 5 star");
        break;

    default: console.log("Please rate us between 1 to 5");
}

//---------------------------------------------xxxxxxxxx-------------------------------------------------------
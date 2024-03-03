/* There are 6 types of loops in JS
    1) While Loop
    2) Do - While Loop
    3) For Loop
    4) For in Loop
    5) For of Loop
    6) For each Loop
*/

// 1) While Loop
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// 2) Do - While Loop --> diiferences between while and do while is that in while loop condition has checked first in do    while first loop body is executed then condition has been checked

i = 0;
do{
    console.log(i);
    i++;
}while(i < 5);

// 3) For loop

for(let x = 0; x < 5; x++){
    console.log(x);
}

// we will discuss the rest of the loops in the later section
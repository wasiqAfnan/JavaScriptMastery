const readlineSync = require('readline-sync');
const kuler = require('kuler');
let userScore = 0;
let database = {
    data: [
        {
            question: "Which game is developed by Santa Monioca Studios?",
            options: {
                a: "Red Dead Redemption",
                b: "Uncharted",
                c: "Call of Duty",
                d: "Fifa"
            },
            correctAnswer: "b"
        },

        {
            question: "Which game is developed by Rockstar Studios?",
            options: {
                a: "Red Dead Redemption",
                b: "Cricket 19",
                c: "Battlefield",
                d: "Uncharted: The Lost Legacy"
            },
            correctAnswer: "a"
        },

        {
            question: "Which game among these gets the game of the year award in 2013?",
            options: {
                a: "Uncharted: A Thieves End",
                b: "Fifa 13",
                c: "The Last of us",
                d: "Uncharted 3"
            },
            correctAnswer: "c"
        },
    ]
}
let userName = readlineSync.question("What's your name? ");
console.log("Hello,",userName);

function showQuestionsOptions() {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i+1}: ${database.data[i].question}\n`);
        for (let key in database.data[i].options){
            console.log(`${key}: ${database.data[i].options[key]}`);
        }
        let userAnswer = readlineSync.question("Enter your choice(a/b/c/d): ").toLowerCase();
        checkAnswer(userAnswer,database.data[i].correctAnswer);
    }   
}

function checkAnswer(userAnswer,correctAnswer){
    if(userAnswer === correctAnswer){
        console.log(kuler("That is correct","#43e605"));
        userScore++;
    }
    else{
        console.log(kuler(`Incorrect answer`,"#b01414"));
        console.log(kuler(`Correct Answer: ${correctAnswer}`,"#43e605"));
    }
}
function showScore(){
    console.log(kuler(`\nYour score is ${userScore}`,"#607dea"));
}

// calling function to start the game
showQuestionsOptions();
showScore();
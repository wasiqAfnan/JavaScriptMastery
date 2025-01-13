// Displaying an alert message using the window object
window.alert("Welcome to the JavaScript Tutorial!");

// Getting user confirmation using confirm()
let userResponse = window.confirm("Do you want to proceed?");
if (userResponse) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Prompting user input using prompt()
let userName = window.prompt("What is your name?");
if (userName) {
    console.log("Hello, " + userName);
} else {
    console.log("No name entered");
}

// Using setTimeout() to delay a message
window.setTimeout(() => {
    console.log("This message is displayed after 3 seconds");
}, 3000);

// Accessing location properties
console.log("Current URL: " + window.location.href);
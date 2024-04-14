// Selecting DOM elements
let passwordBox = document.querySelector('#passwordBox'); // Input field to display generated password
let generatePasswordButton = document.querySelector('#generatePasswordButton'); // Button to generate password
let copyPasswordButton = document.querySelector('#copyPasswordButton'); // Button to copy password to clipboard
let passLength = document.querySelector('#passLength'); // Input range for password length
let passLengthText = document.querySelector('#passLengthText'); // Text display for password length
let numberChecked = document.querySelector('#numberChecked'); // Checkbox for including numbers in password
let symbolChecked = document.querySelector('#symbolChecked'); // Checkbox for including symbols in password

// Character sets for generating password
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Alphabets
let numbers = "1234567890"; // Numbers
let symbols = "$@#!*&()^&"; // Symbols

let index; // Index to track total character set length
let str; // String to hold the character set for generating password
let finalPassword = ""; // Final generated password string
let length = 10; // Default password length

// Event listener for clicking the generate password button
generatePasswordButton.addEventListener('click', () => {
    checkParam(); // Call function to check parameters and generate password
})

// Event listener for changing password length using the range input
passLength.addEventListener('change', () => {
    passLengthText.value = passLength.value; // Update text display with selected password length
    length = passLengthText.value; // Update length variable with selected password length
})

// Event listener for clicking the copy password button
copyPasswordButton.addEventListener('click', () => {
    navigator.clipboard.writeText(finalPassword) // Copy password to clipboard
        .then(() => {
            copyPasswordButton.innerHTML = "Password Copied ✔"; // Update button text to indicate success
            setTimeout(() => {
                copyPasswordButton.innerHTML = "Copy Password 📃"; // Revert button text after 4 seconds
            }, 4000)
        })
        .catch((error) => console.log(error)); // Log any error occurred during copying
})

// Function to check parameters and update character set for generating password
function checkParam() {
    index = 52; // Initial index for alphabets
    str = alphabet; // Initial character set includes only alphabets
    if (numberChecked.checked) {
        str += numbers; // If numbers checkbox is checked, add numbers to character set
        index += 10; // Increment index by number of numbers added
    }

    if (symbolChecked.checked) {
        str += symbols; // If symbols checkbox is checked, add symbols to character set
        index += 10; // Increment index by number of symbols added
    }

    generatePassword(str, length, index); // Call function to generate password with updated parameters
}

// Function to generate password using given character set and length
function generatePassword(finalStr, finalLength, index) {
    finalPassword = ""; // Reset final password string
    for (let i = 0; i < finalLength; i++) {
        finalPassword += finalStr.charAt(Math.floor(Math.random() * index)); // Randomly select characters from character set
    }

    passwordBox.value = finalPassword; // Update input field with generated password
}

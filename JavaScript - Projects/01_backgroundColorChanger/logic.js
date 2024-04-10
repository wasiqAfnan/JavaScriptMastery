// getting all buttons
const buttons = document.querySelectorAll('button');
// getting body
const body = document.querySelector('body');

// looping through each button and adding event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Chnaging background color of body as given in the button id
        body.style.backgroundColor = event.target.id;
    });
})
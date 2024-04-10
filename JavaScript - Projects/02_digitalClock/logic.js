// Selecting first element of HTMLCollection 
const clockTime = document.getElementsByClassName('clock').item(0);

// Set interval function to update timein every second
setInterval(() => {
    // creating date object and getting current hours, minutes and seconds
    const date = new Date();
    let hrs = String(date.getHours());
    let mnts = String(date.getMinutes());
    let sec = String(date.getSeconds());

    // creating clock like string to render in the actual page
    let time = hrs + ":" + mnts + ":" + sec;
    // rendering clock to html page
    clockTime.innerHTML = time;
}, 1000)
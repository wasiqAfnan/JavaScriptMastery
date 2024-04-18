const KEY = "YOURAPIKEY";
let city = "";

const weatherDetailsDiv = document.querySelector('#weatherDetailsDiv');
const cityInput = document.querySelector('#searchText');
const weatherImg = document.querySelector('#weatherImg');
const paraDescription = document.querySelector('#paraDescription');
const paraDegree = document.querySelector('#paraDegree');
const paraCity = document.querySelector('#paraCity');
const paraFeelsLike = document.querySelector('#paraFeelsLike');
const windHumidity = document.querySelector('#windHumidity');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');


const searchButton = document.querySelector('#searchButton');
let weatherImgIcon = "";

searchButton.addEventListener('click', () => {
    city = cityInput.value;
    getWeatherDetails(city, KEY);
    // console.log(city);
})

// getting weather data
function getWeatherDetails(city, key) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then((raw) => {
            return raw.json()
        })
        .then((data) => {
            // console.log(data);
            chnageUi(data);

        })
        .catch((error) => {
            console.error("Some error occured while fetching the data", error);
        })

}

// changing the ui
function chnageUi(data) {
    if (data.cod === '404') {
        alert("City not found")
    }
    else {
        weatherDetailsDiv.style.opacity = "1";
        windHumidity.style.opacity = "1";
        weatherImgIcon = data.weather[0].icon;
        weatherImg.src = `https://openweathermap.org/img/wn/${weatherImgIcon}@2x.png`;
        // console.log(weatherImg.getAttribute('src'));
        paraDescription.innerHTML = data.weather[0].description;
        paraDegree.innerHTML = `${data.main.temp}&deg C`;
        paraCity.innerHTML = data.name;
        paraFeelsLike.innerHTML = `Feels like: ${data.main.feels_like}&deg C`;
        windSpeed.innerHTML = `<span>wind speed: </span>${data.wind.speed} km/h`;
        humidity.innerHTML = `<span>Humidity: </span>${data.main.humidity}%`;
    }
}

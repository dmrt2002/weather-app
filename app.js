const searchbox = document.querySelector(".search-box");
const request = document.querySelector(".request");
function Setquery() {
    getresults(searchbox.value);
}

function getresults(query){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=886705b4c1182eb1c69f28eb8c520e20`;
    fetch(url)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    request.innerHTML = "";
    console.log(weather);

    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span> °C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}  °C / ${weather.main.temp_max}`;

}

function dateBuilder (d) {
    let months = ["january","february", "march", "april" , "may" , "june" , "july","august","september", "october" , "november" , "december"];
    let days = ["sunday","monday", "tuesday" , "wednesday" , "thursday","friday","saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}  ${date} ${month}  ${year}`;
}


const searchbox = document.querySelector(".search-box");
const request = document.querySelector(".request");

function Setquery() {
    getresults(searchbox.value);
}

function getresults(query){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=886705b4c1182eb1c69f28eb8c520e20`;
    fetch(url)
    .then(function(weather) {
        if (!weather.ok) {
            throw Error(weather.statusText);
        }
        return weather.json();
    }).then(function(weather) {
        
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span> °C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = weather.weather[0].description;
    weather_el.innerHTML = weather_el.innerHTML.toUpperCase();

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min - 273.15)} °C / ${Math.round(weather.main.temp_max - 273.15)}`;
    
    request.innerHTML = "";
    
    }).catch(function(error) {
        request.innerHTML = "Enter a Valid City Name"
    });
      
}

function dateBuilder (d) {
    let months = ["January","February", "March", "April" , "May" , "June" , "July","August","September", "October" , "november" , "december"];
    let days = ["Sunday","Monday", "Tuesday" , "Wednesday" , "Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}  ${date} ${month}  ${year}`;
}

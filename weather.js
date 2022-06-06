const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const windSpeed = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weather_error = document.querySelector('.weather-error')
const weatherDescription = document.querySelector('.weather-description');
// const city = document.querySelector('.city')

function changeWeatherLang(data) {
    if (language === 'ru') {
        windSpeed.textContent = 'Скорость ветра' + ': ' + Math.floor(data.wind.speed) + ' м/с'
        humidity.textContent = 'Влажность' + ': ' + data.main.humidity
    } else {
        windSpeed.textContent = 'Wind Speed' + ': ' + Math.floor(data.wind.speed) + ' м/с'
        humidity.textContent = 'Humidity' + ': ' + data.main.humidity
    }
}

async function getWeather() {
    console.log(city.value)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=5518f1f46d54a2e9865f24f4fc2f913e&units=metric`;


    try {
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        changeWeatherLang(data)
        weather_error.textContent = ''
        weather_error.className = 'weather-error'
    } catch (error) {
        weatherIcon.className = 'weather-icon owf';
        weather_error.textContent = 'You need to enter city';
        weather_error.className = 'weather-error active';
        temperature.textContent = ''
        weatherDescription.textContent = ''
        windSpeed.textContent = ''
        humidity.textContent = ''
    }
}

document.addEventListener('DOMContentLoaded', getWeather)
city.addEventListener('change', getWeather)
function fetchWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'e42707eff3a77002c885220ccd79af8b'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const weatherData = JSON.parse(xhr.responseText);
                displayWeather(weatherData);
            } else {
                alert('Failed to fetch weather data. Please try again later.');
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const description = weatherData.weather[0].description;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description}</p>
    `;
}

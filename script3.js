const apiKey = 'your_api_key';  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temperature = `${data.main.temp}°C`;
                const description = data.weather[0].description;
                const humidity = `Humidity: ${data.main.humidity}%`;
                const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

                document.getElementById('city-name').textContent = cityName;
                document.getElementById('temperature').textContent = temperature;
                document.getElementById('description').textContent = description;
                document.getElementById('humidity').textContent = humidity;
                document.getElementById('wind-speed').textContent = windSpeed;
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data');
        });
}

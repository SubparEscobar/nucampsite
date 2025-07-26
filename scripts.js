console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function() {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// Fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Houston';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('There was an error fetching the weather data:', error);
    }
}

fetchWeather();

function displayWeather(data) {
    const weatherIcon = document.getElementById('weather-icon');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherDescription = document.getElementById('weather-description');

    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}" />`;
    weatherTemp.textContent = `${Math.round(data.main.temp)}°F`;
    weatherDescription.textContent = data.weather[0].description;

    // Make the weather component visible
    document.getElementById('weather').classList.remove('d-none');
}
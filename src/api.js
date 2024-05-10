const loadingOverlay = document.querySelector('.loading-overlay');

async function getWeather(location = localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation'): 'Tamale'){
    loadingOverlay.classList.remove('hidden');
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=7`, { mode: "cors" });
    const weatherData = await response.json();
    loadingOverlay.classList.add('hidden');
    return weatherData;
}

async function getGif(location = localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation'): 'Tamale'){
    loadingOverlay.classList.remove('hidden');
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5jPQE4Oe3NJuZbtMgBTGjkVPTmH2v9MV&q=${location}&limit=1`, { mode: 'cors' });
    const gifData = await response.json();
    loadingOverlay.classList.add('hidden');
    return gifData;
}

export default { getWeather, getGif};
async function getWeather(location = 'Tamale'){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=3`, { mode: "cors" });
    const weatherData = await response.json();
    return weatherData;
}

async function getGif(search = 'Tamale'){
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5jPQE4Oe3NJuZbtMgBTGjkVPTmH2v9MV&q=${search}&limit=1`, { mode: 'cors' });
    const gifData = await response.json();
    return gifData;
}

export default { getWeather, getGif};
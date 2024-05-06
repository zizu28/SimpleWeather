async function getWeather(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=fa43114a16544456bb311445240605&q=london", { mode: "cors" });
    const weatherData = await response.json();
    return weatherData;
}

getWeather().then(resolve => {
    console.log(resolve);
});

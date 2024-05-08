export default async function getWeather(location){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=3`, { mode: "cors" });
    const weatherData = await response.json();
    return weatherData;
}
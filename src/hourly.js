// const hourlyForecast = document.querySelector('.hourlyForecast');
// const hourlyTitle = document.querySelector('.hourlyTitle');
// const hourlyMetrics = document.querySelector('.hourlyMetrics');
// const hourlyData = document.querySelector('.hourlyData');
// const search = document.querySelector('#search');
// const celcius = document.querySelector('#celcius');
// const fahrenheiht = document.querySelector('#fahrenheiht');
// let city;

// search.addEventListener('change', () => {
//     city = search.value;
//     search.value = '';
// })

// celcius.addEventListener('click', () => {
//     const data = getWeather(city);
//     data.then(resolve => {
//         console.log(resolve);
//     })
//     city = '';
// })

// async function getCelciusData(){
//     const data = await getWeather(city);
//     celcius.addEventListener('click', () => {
//         data.then(resolvedData => {

//             hourlyTitle.textContent = "Hourly Forecast";

//             resolvedData.forecast.forecastday.forEach(forecast => {
//                 console.log(forecast.hour)
//             })
//             hourlyForecast.appendChild(hourlyTitle);
//             hourlyForecast.appendChild(hourlyMetrics);
//             hourlyForecast.appendChild(hourlyData);
//         })
//     })
// }

// function getFahrenheitData(){
//     const data = getWeather(city);
//     fahrenheihtBtn.addEventListener('click', () => {

//     })
// }

// async function getWeather(location){
//     const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=3`, { mode: "cors" });
//     const weatherData = await response.json();
//     return weatherData;
// }

// export default { getCelciusData, getFahrenheitData}; 
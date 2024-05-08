import getWeather from './api'

const search = document.querySelector('#search');
const currentTemp = document.querySelector('.currentTemp');
const currentFeeling = document.querySelector('.currentFeeling');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

let city = 'Tamale';

search.addEventListener('change', () => {
    city = search.value;
    search.value = '';
})

function getCurrentCelciusTemp(){
    currentTemp.textContent = '';
    const jsonData = getWeather(city);
    const currentTempSup = document.createElement('sup');
    const currentTempSpan = document.createElement('span');
    currentTempSup.textContent = 'o';
    currentTempSpan.textContent = 'C';
    jsonData.then(resolvedData => {
        currentTemp.textContent = resolvedData.current.temp_c;
        currentTemp.appendChild(currentTempSup);
        currentTemp.appendChild(currentTempSpan);
    })
}

function getCurrentFeelsLikeCelciusTemp(){
    currentFeeling.textContent = '';
    const currentFeelsLikeTempSup = document.createElement('sup');
    const currentFeelsLikeTempSpan = document.createElement('span');
    currentFeelsLikeTempSup.textContent = 'o';
    currentFeelsLikeTempSpan.textContent = 'C';
    const jsonData = getWeather(city);
    jsonData.then(resolvedData => {
        currentFeeling.textContent = resolvedData.current.feelslike_c;
        currentFeeling.appendChild(currentFeelsLikeTempSup);
        currentFeeling.appendChild(currentFeelsLikeTempSpan);
    })
}

function getForecastedMaxCelciusTemp(){
    high.textContent = '';
    const highSup = document.createElement('sup');
    const highSpan = document.createElement('span');
    highSup.textContent = 'o';
    high.textContent = 'C';
    const jsonData = getWeather(city);
    jsonData.then(resolvedData => {
        high.textContent = resolvedData.forecast.forecastday.day.maxtemp_c;
        high.appendChild(highSup);
        high.appendChild(highSpan);
    })
}

function getForecastedMinCelciusTemp(){
    low.textContent = '';
    const lowSup = document.createElement('sup');
    const lowSpan = document.createElement('span');
    lowSup.textContent = 'o';
    lowSpan.textContent = 'C';
    const jsonData = getWeather(city);
    jsonData.then(resolvedData => {
        currentFeeling.textContent = resolvedData.forecast.forecastday.day.mintemp_c;
        currentFeeling.appendChild(lowSup);
        currentFeeling.appendChild(lowSpan);
    })
}

export default { 
    getCurrentCelciusTemp,
    getCurrentFeelsLikeCelciusTemp,
    getForecastedMaxCelciusTemp,
    getForecastedMinCelciusTemp
};
import './style.css'
import getData from './api';
import daily from './daily';
import current from './current';
import hourly from './hourly';
import daysData from './Days';

const search = document.querySelector('#search');
const celcius = document.querySelector('#celcius');
const fahrenheiht = document.querySelector('#fahrenheiht');
const hourlyDate = document.querySelector('.date');
const gif = document.querySelector('#gif');
const hourlyData = document.querySelector('.hourlyData');
const previousDay = document.querySelector('#previousDay');
const nextDay = document.querySelector('#nextDay');

nextDay.style = 'cursor: pointer';
previousDay.style = 'cursor: pointer';

let city;
let daysIndex = 0;

// let n = 0;

search.addEventListener('change', () => {
    localStorage.setItem('lastLocation', search.value);
    city = search.value;
    search.value = '';
})

nextDay.addEventListener('click', () => {
    const data = getData.getWeather();
    data.then(resolvedData => {
        daysIndex = daysData.nextDay(resolvedData, daysIndex);
    })
})

previousDay.addEventListener('click', () => {
    const data = getData.getWeather();
    data.then(resolvedData => {
        daysIndex = daysData.previousDay(resolvedData, daysIndex);
    })
})

window.onload = onWindowLoad;

function onWindowLoad(){
    const gifData = getData.getGif();
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather();
    data.then(resolvedData => {
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentCelciusData(resolvedData);
        daily.getCelciusDay(resolvedData, daysIndex);
        hourly.loadHourlyCelciusData(resolvedData, daysIndex);
    })
}

celcius.addEventListener('click', () => {
    const gifData = getData.getGif(city);
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather(city);
    data.then(resolvedData => {
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentCelciusData(resolvedData);
        daily.getCelciusDay(resolvedData, daysIndex);
        hourly.loadHourlyCelciusData(resolvedData, daysIndex);
    })
})

fahrenheiht.addEventListener('click', () => {
    const gifData = getData.getGif(city);
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather(city);
    data.then(resolvedData => {
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentFahrenheihtData(resolvedData);
        daily.getFahrenheihtDay(resolvedData, daysIndex);
        hourly.loadHourlyFahrenheihtData(resolvedData, daysIndex);
    })
})
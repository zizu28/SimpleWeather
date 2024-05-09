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
    const jsonData = getData.getWeather();
    jsonData.then(resolvedData => {
        const days = resolvedData.forecast.forecastday;
        if(daysIndex < days.length - 1){
            daysIndex++;
        }
    })
})

previousDay.addEventListener('click', () => {
    if(daysIndex > 0){
        daysIndex--;
    }
})

window.onload = onWindowLoad;

function onWindowLoad(){
    console.log(daysIndex);
    const gifData = getData.getGif(localStorage.getItem('lastLocation'));
    gifData.then(result => {
        console.log(result);
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather(localStorage.getItem('lastLocation'));
    data.then(resolvedData => {
        console.log(resolvedData);
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
        console.log(result);
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather(city);
    data.then(resolvedData => {
        console.log(resolvedData);
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentCelciusData(resolvedData);
        daily.getCelciusDay(resolvedData, daysIndex);
        hourly.loadHourlyCelciusData(resolvedData, daysIndex);
    })
    console.log(daysIndex);
})

fahrenheiht.addEventListener('click', () => {
    const gifData = getData.getGif(city);
    gifData.then(result => {
        console.log(result);
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather(city);
    data.then(resolvedData => {
        console.log(resolvedData);
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentFahrenheihtData(resolvedData);
        daily.getFahrenheihtDay(resolvedData, daysIndex);
        hourly.loadHourlyFahrenheihtData(resolvedData, daysIndex);
    })
    console.log(daysIndex);
})
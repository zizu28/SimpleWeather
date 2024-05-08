import './style.css'
import getData from './api';
import daily from './daily';
import current from './current';
import hourly from './hourly';
import daysData from './Days'
// import fahrenheihtData from './fahrenheiht';

const search = document.querySelector('#search');
const celcius = document.querySelector('#celcius');
const fahrenheiht = document.querySelector('#fahrenheiht');
const hourlyDate = document.querySelector('.date');
const gif = document.querySelector('#gif');
const hourlyData = document.querySelector('.hourlyData');


let city;
let daysIndex = 0;
let n = 0;

search.addEventListener('change', () => {
    city = search.value;
    search.value = '';
})

window.onload = onWindowLoad;

function onWindowLoad(){
    const gifData = getData.getGif();
    gifData.then(result => {
        console.log(result);
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = getData.getWeather();
    data.then(resolvedData => {
        console.log(resolvedData);
        const days = resolvedData.forecast.forecastday;
        console.log(days.length)
        const date = new Date(days[0].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentCelciusData(resolvedData);
        daily.getCelciusDay(resolvedData);
        hourly.loadHourlyCelciusData(resolvedData);
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
        const date = new Date(days[0].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentCelciusData(resolvedData);
        daily.getCelciusDay(resolvedData);
        hourly.loadHourlyCelciusData(resolvedData);
    })
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
        const date = new Date(days[0].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        current.displayCurrentFahrenheihtData(resolvedData);
        daily.getFahrenheihtDay(resolvedData);
        hourly.loadHourlyFahrenheihtData(resolvedData);
    })
})
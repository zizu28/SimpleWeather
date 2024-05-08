import getWeather from "./api";
import loadHourlyData from "./hourly";

const dailyForecastContent = document.querySelector('.dailyForecastContent');
const forecastDayAndDate = document.querySelector('.forecastDayAndDate');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');
const forecast = document.querySelector('.forecast');
const dailyTemps = document.querySelector('.dailyTemps');
const next = document.querySelector('#nextDay');
const previous = document.querySelector('#previousDay');

let currentDay = 0;

function nextDay(){
    const jsonData = getWeather();
    next.addEventListener('click', () => {
        jsonData.then(resolvedData => {
            const days = resolvedData.forecast.forecastday;
            if(currentDay < days.length - 1){
                currentDay++;
                temp();
                loadHourlyData(currentDay);
            }
        })
    })
}

function previousDay(){
    const jsonData = getWeather();
    previous.addEventListener('click', () => {
        jsonData.then(resolvedData => {
            const days = resolvedData.forecast.forecastday;
            if(currentDay > 0){
                currentDay--;
                temp();
                loadHourlyData(currentDay);
            }
        })
    })
}

function removeChildNode(parentNode, className){
    const forecastChildNode = parentNode.querySelector(className);
    const children = forecastChildNode.querySelectorAll('*');
    for(let i = 0; i < children.length; i++){
        children.removeChild(children[i])
    }
}

function temp(){
    removeChildNode(dailyForecastContent, 'forecast');
    forecastDayAndDate.textContent = days[currentDay][date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    dailyIcon.src = 'https:' + days[currentDay].day.condition.icon;
    dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
    const highTempSup = document.createElement('sup');
    const highTempSpan = document.createElement('span');
    highTempSup.textContent = 'o';
    highTempSpan.textContent = 'C';
    high.textContent = days[currentDay].day.maxtemp_c;
    high.appendChild(highTempSup)
    high.appendChild(highTempSpan);
    const lowTempSup = document.createElement('sup');
    const lowTempSpan = document.createElement('span');
    lowTempSup.textContent = 'o';
    lowTempSpan.textContent = 'C';
    low.textContent = days[currentDay].day.mintemp_c;
    low.style = 'opacity: 0.5; font-weight: bold;';
    low.appendChild(lowTempSup)
    dailyTemps.appendChild(high);
    dailyTemps.appendChild(low);
    forecast.appendChild(forecastDayAndDate);
    forecast.appendChild(dailyIcon);
    forecast.appendChild(dailyTemps);
}

export default { nextDay, previousDay };
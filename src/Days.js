import daily from './daily';
import hourly from './hourly';

const hourlyData = document.querySelector('.hourlyData');
const hourlyDate = document.querySelector('.date');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

function nextDay(resolvedWeatherData, dayIndex){
    const days = resolvedWeatherData.forecast.forecastday;
    if(dayIndex < days.length - 1){
        hourlyData.textContent = '';
        dailyIcon.src = '';
        high.textContent = '';
        low.textContent = '';
        dayIndex += 1;
        const date = new Date(days[dayIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        daily.getCelciusDay(resolvedWeatherData, dayIndex);
        hourly.loadHourlyCelciusData(resolvedWeatherData, dayIndex);
    }
    return dayIndex;
}

function previousDay(resolvedWeatherData, dayIndex){
    const days = resolvedWeatherData.forecast.forecastday;
    if(dayIndex > 0){
        hourlyData.textContent = '';
        dailyIcon.src = '';
        high.textContent = '';
        low.textContent = '';
        dayIndex -= 1;
        const date = new Date(days[dayIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        daily.getCelciusDay(resolvedWeatherData, dayIndex);
        hourly.loadHourlyCelciusData(resolvedWeatherData, dayIndex);
    }
    return dayIndex;
}

export default { nextDay, previousDay};
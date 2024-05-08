const forecastDayAndDate = document.querySelector('.forecastDayAndDate');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

function getCelciusDay(resolvedData, n = 0){
    const date = new Date(resolvedData.forecast.forecastday[0].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    dailyIcon.src = 'https:' + resolvedData.forecast.forecastday[n].day.condition.icon;
    dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
    const highTempSup = document.createElement('sup');
    const highTempSpan = document.createElement('span');
    highTempSup.textContent = 'o';
    highTempSpan.textContent = 'C';
    high.textContent = resolvedData.forecast.forecastday[n].day.maxtemp_c;
    high.appendChild(highTempSup)
    high.appendChild(highTempSpan);
    const lowTempSup = document.createElement('sup');
    const lowTempSpan = document.createElement('span');
    lowTempSup.textContent = 'o';
    lowTempSpan.textContent = 'C';
    low.textContent = resolvedData.forecast.forecastday[n].day.mintemp_c;
    low.style = 'opacity: 0.5; font-weight: bold;';
    low.appendChild(lowTempSup)
    low.appendChild(lowTempSpan)
}

function getFahrenheihtDay(resolvedData, n = 0){
    const date = new Date(resolvedData.forecast.forecastday[n].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    dailyIcon.src = 'https:' + resolvedData.forecast.forecastday[0].day.condition.icon;
    dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
    const highTempSup = document.createElement('sup');
    const highTempSpan = document.createElement('span');
    highTempSup.textContent = 'o';
    highTempSpan.textContent = 'F';
    high.textContent = resolvedData.forecast.forecastday[n].day.maxtemp_f;
    high.appendChild(highTempSup)
    high.appendChild(highTempSpan);
    const lowTempSup = document.createElement('sup');
    const lowTempSpan = document.createElement('span');
    lowTempSup.textContent = 'o';
    lowTempSpan.textContent = 'F';
    low.textContent = resolvedData.forecast.forecastday[n].day.mintemp_f;
    low.style = 'opacity: 0.5; font-weight: bold;';
    low.appendChild(lowTempSup)
    low.appendChild(lowTempSpan)
}


export default { getCelciusDay, getFahrenheihtDay };
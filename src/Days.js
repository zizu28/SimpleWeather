const previousDay = document.querySelector('#previousDay');
const nextDay = document.querySelector('#nextDay');
const hourlyDate = document.querySelector('.hourlyDate');


function getPreviousDay(resolvedData, daysIndex, currentCelsius, celciusDay, hourlyCelciusDay){
    previousDay.addEventListener('click', () => {
        const days = resolvedData.forecast.forecastday;
        if(daysIndex > 0){
            daysIndex--;
            const date = new Date(days[daysIndex].date);
            const dateArray = date.toString().split(' ');
            hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
            
            currentCelsius;
            celciusDay;
            hourlyCelciusDay;
        }
    })
}

function getNextDay(resolvedData, daysIndex, currentCelsius, celciusDay, hourlyCelciusDay){
    nextDay.addEventListener('click', () => {
        const days = resolvedData.forecast.forecastday;
        if(daysIndex < days.length - 1){
            daysIndex++;
            const date = new Date(days[daysIndex].date);
            const dateArray = date.toString().split(' ');
            hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
            
            currentCelsius;
            celciusDay;
            hourlyCelciusDay;
        }
    })
}


export default { getNextDay, getPreviousDay };

import getWeather from "./api";

const currentDataHeaderTitle = document.querySelector('.currentDataHeaderTitle');
const currentDataHeaderTime = document.querySelector('.currentDataHeaderTime');
const currentDataHeaderUpdate = document.querySelector('.currentDataHeaderUpdate');
const currentDataContainer = document.querySelector('#currentData');
const currentDataDate = document.querySelector('.currentDataDate');
const currentDataLocation = document.querySelector('.currentDataLocation');
const currentDataCountry = document.querySelector('.currentDataCountry');
const currentTemp = document.querySelector('.currentTemp');
const currentFeeling = document.querySelector('.currentFeeling');
const currentDataIcon = document.querySelector('#currentDataIcon');
const currentCondition = document.querySelector('.currentCondition');
const speed = document.querySelector('.speed');
const speedText = document.querySelector('.speedText');
const percent = document.querySelector('.percent');
const percentText = document.querySelector('.percentText');
const uv = document.querySelector('.uv');
const uvText = document.querySelector('.uvText');
const visibility = document.querySelector('.visibility');
const visibilityText = document.querySelector('.visibilityText');

function displayCurrentFahrenheihtData(){
    currentDataContainer.style = 'display: grid';
    dailyForecast.style.display = 'grid';

    const jsonData = getWeather();
    jsonData.then(resolvedData => {
        const locationData = resolvedData.location.localtime.toString().split(' ');
        currentDataHeaderTime.textContent = locationData[1]
        currentDataHeaderTime.style = 'text-align: center;';
        currentDataHeaderUpdate.textContent = 'Last Updated';
        currentDataHeaderUpdate.style = 'opacity: 0.5; font-weight: bold;';
        currentDataHeaderTitle.textContent = 'Current Weather';

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        currentDataDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
        currentDataLocation.textContent = resolvedData.location.name + ', ' + resolvedData.location.region;
        currentDataCountry.textContent = resolvedData.location.country;
        currentDataCountry.style = 'opacity: 0.5; font-weight: bold;';

        const currentTempSup = document.createElement('sup');
        const currentTempSpan = document.createElement('span');
        currentTempSup.textContent = 'o';
        currentTempSpan.textContent = 'F';
        currentTemp.textContent = resolvedData.current.temp_f 
        currentTemp.appendChild(currentTempSup)
        currentTemp.appendChild(currentTempSpan)
        const currentFeelingSup = document.createElement('sup');
        const currentFeelingSpan = document.createElement('span');
        currentFeelingSup.textContent = 'o';
        currentFeelingSpan.textContent = 'F';
        currentFeeling.textContent = 'Feels like ' + resolvedData.current.feelslike_f;
        currentFeeling.style = 'opacity: 0.5; font-weight: bold;'
        currentFeeling.appendChild(currentFeelingSup)
        currentFeeling.appendChild(currentFeelingSpan)
        currentDataIcon.src = 'https:'+resolvedData.current.condition.icon;
        currentCondition.textContent = resolvedData.current.condition.text;
        currentCondition.style = 'margin-left: 0';

        speed.textContent = resolvedData.current.wind_kph + ' Km/h '+ resolvedData.current.wind_dir;
        speedText.textContent = 'Wind';
        speed.style = 'text-align: center';
        speedText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        percent.textContent = resolvedData.current.humidity + '%';
        percentText.textContent = 'Humidity';
        percent.style = 'text-align: center';
        percentText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        uv.textContent = resolvedData.current.uv;
        uvText.textContent = 'UV Index';
        uv.style = 'text-align: center';
        uvText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        visibility.textContent = resolvedData.current.vis_km + ' Km';
        visibilityText.textContent = 'Visibility';
        visibilityText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        visibility.style = 'text-align: center';
    })
}

function displayCurrentCelciusData(){
    currentDataContainer.style = 'display: grid';
    dailyForecast.style.display = 'grid';

    const jsonData = getWeather();
    jsonData.then(resolvedData => {
        const locationData = resolvedData.location.localtime.toString().split(' ');
        currentDataHeaderTime.textContent = locationData[1]
        currentDataHeaderTime.style = 'text-align: center;';
        currentDataHeaderUpdate.textContent = 'Last Updated';
        currentDataHeaderUpdate.style = 'opacity: 0.5; font-weight: bold;';
        currentDataHeaderTitle.textContent = 'Current Weather';

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        currentDataDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
        currentDataLocation.textContent = resolvedData.location.name + ', ' + resolvedData.location.region;
        currentDataCountry.textContent = resolvedData.location.country;
        currentDataCountry.style = 'opacity: 0.5; font-weight: bold;';

        const currentTempSup = document.createElement('sup');
        const currentTempSpan = document.createElement('span');
        currentTempSup.textContent = 'o';
        currentTempSpan.textContent = 'C';
        currentTemp.textContent = resolvedData.current.temp_c; 
        currentTemp.appendChild(currentTempSup)
        currentTemp.appendChild(currentTempSpan)
        const currentFeelingSup = document.createElement('sup');
        const currentFeelingSpan = document.createElement('span');
        currentFeelingSup.textContent = 'o';
        currentFeelingSpan.textContent = 'C';
        currentFeeling.textContent = 'Feels like ' + resolvedData.current.feelslike_c;
        currentFeeling.style = 'opacity: 0.5; font-weight: bold;'
        currentFeeling.appendChild(currentFeelingSup)
        currentFeeling.appendChild(currentFeelingSpan)
        currentDataIcon.src = 'https:'+resolvedData.current.condition.icon;
        currentCondition.textContent = resolvedData.current.condition.text;
        currentCondition.style = 'margin-left: 0';

        speed.textContent = resolvedData.current.wind_kph + ' Km/h '+ resolvedData.current.wind_dir;
        speedText.textContent = 'Wind';
        speed.style = 'text-align: center';
        speedText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        percent.textContent = resolvedData.current.humidity + '%';
        percentText.textContent = 'Humidity';
        percent.style = 'text-align: center';
        percentText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        uv.textContent = resolvedData.current.uv;
        uvText.textContent = 'UV Index';
        uv.style = 'text-align: center';
        uvText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        visibility.textContent = resolvedData.current.vis_km + ' Km';
        visibilityText.textContent = 'Visibility';
        visibilityText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
        visibility.style = 'text-align: center';
    })
}


export default { displayCurrentCelciusData, displayCurrentFahrenheihtData };
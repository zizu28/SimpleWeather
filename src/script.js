import './style.css'
import getWeather from './api';
// import fahrenheihtData from './fahrenheiht';

const search = document.querySelector('#search');
const celcius = document.querySelector('#celcius');
const fahrenheiht = document.querySelector('#fahrenheiht');
const hourlyForecast = document.querySelector('.hourlyForecast');
const hourlyTitle = document.querySelector('.hourlyTitle');
const hourlyData = document.querySelector('.hourlyData');
const hourlyDate = document.querySelector('.date');
const header = document.createElement('thead');
const headerRow = document.createElement('tr');
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
const currentDataHeaderTitle = document.querySelector('.currentDataHeaderTitle');
const currentDataHeaderTime = document.querySelector('.currentDataHeaderTime');
const currentDataHeaderUpdate = document.querySelector('.currentDataHeaderUpdate');
const dailyForecast = document.querySelector('.dailyForecast');
const forecastDayAndDate = document.querySelector('.forecastDayAndDate');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

let city;
let currentDay = 0;
hourlyForecast.style.display = "none";
currentDataContainer.style.display = 'none';
dailyForecast.style.display = 'none';

search.addEventListener('change', () => {
    city = search.value;
    search.value = '';
})

celcius.addEventListener('click', () => {
    const data = getWeather(city);
    data.then(resolvedData => {
        console.log(resolvedData);
        const [day1, day2, day3] = resolvedData.forecast.forecastday;
        const date = new Date(day1.date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')

        // CURRENT DATA LOGIC
        currentDataContainer.style = 'display: grid';
        dailyForecast.style.display = 'grid';
        
        
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
        currentTemp.textContent = resolvedData.current.temp_c 
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


        // DAILY FORECAST DATA LOGIC
        forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
        dailyIcon.src = 'https:' + day1.day.condition.icon;
        dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
        const highTempSup = document.createElement('sup');
        const highTempSpan = document.createElement('span');
        highTempSup.textContent = 'o';
        highTempSpan.textContent = 'C';
        high.textContent = day1.day.maxtemp_c;
        high.appendChild(highTempSup)
        high.appendChild(highTempSpan);
        const lowTempSup = document.createElement('sup');
        const lowTempSpan = document.createElement('span');
        lowTempSup.textContent = 'o';
        lowTempSpan.textContent = 'C';
        low.textContent = day1.day.mintemp_c;
        low.style = 'opacity: 0.5; font-weight: bold;';
        low.appendChild(lowTempSup)
        low.appendChild(lowTempSpan)
        

        // HOURLY FORECAST DATA LOGIC
        hourlyTitle.textContent = "Hourly Forecast";
        hourlyForecast.style.display = "grid";

        const headerData = ['Time', 'Icon', 'Condition', 'Temp (Celcius)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
        headerData.forEach(text => {
            const data = document.createElement('th');
            data.textContent = text;
            headerRow.appendChild(data);
        })

        header.appendChild(headerRow);
        hourlyData.appendChild(header);

        

        day1.hour.forEach(hour => {
            const icon = document.createElement('img');
            icon.src = 'https:'+hour.condition.icon;
            const row = document.createElement('tr');
            const rowData1 = document.createElement('td');
            const rowData2 = document.createElement('td');
            const rowData3 = document.createElement('td');
            const rowData4 = document.createElement('td');
            const rowData5 = document.createElement('td');
            const rowData6 = document.createElement('td');
            const rowData7 = document.createElement('td');
            const rowData8 = document.createElement('td');
            rowData1.textContent = hour.time.split(' ')[1];
            rowData2.appendChild(icon);
            rowData3.textContent = hour.condition.text;
            rowData4.textContent = hour.temp_c;
            rowData5.textContent = hour.precip_mm;
            rowData6.textContent = hour.wind_kph;
            rowData7.textContent = hour.humidity;
            rowData8.textContent = hour.feelslike_c;

            row.appendChild(rowData1);
            row.appendChild(rowData2);
            row.appendChild(rowData3);
            row.appendChild(rowData4);
            row.appendChild(rowData5);
            row.appendChild(rowData6);
            row.appendChild(rowData7);
            row.appendChild(rowData8);
        
            hourlyData.appendChild(row);
        })
    })
    city = '';
})

fahrenheiht.addEventListener('click', () => {
    const data = getWeather(city);
    data.then(resolvedData => {
        console.log(resolvedData);
        const [day1, day2, day3] = resolvedData.forecast.forecastday;
        const date = new Date(day1.date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')

        // CURRENT DATA LOGIC
        currentDataContainer.style = 'display: grid';
        dailyForecast.style.display = 'grid';
        
        
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


        // DAILY FORECAST DATA LOGIC
        forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
        dailyIcon.src = 'https:' + day1.day.condition.icon;
        dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
        const highTempSup = document.createElement('sup');
        const highTempSpan = document.createElement('span');
        highTempSup.textContent = 'o';
        highTempSpan.textContent = 'F';
        high.textContent = day1.day.maxtemp_f;
        high.appendChild(highTempSup)
        high.appendChild(highTempSpan);
        const lowTempSup = document.createElement('sup');
        const lowTempSpan = document.createElement('span');
        lowTempSup.textContent = 'o';
        lowTempSpan.textContent = 'F';
        low.textContent = day1.day.mintemp_f;
        low.style = 'opacity: 0.5; font-weight: bold;';
        low.appendChild(lowTempSup)
        low.appendChild(lowTempSpan)
        

        // HOURLY FORECAST DATA LOGIC
        hourlyTitle.textContent = "Hourly Forecast";
        hourlyForecast.style.display = "grid";

        const headerData = ['Time', 'Icon', 'Condition', 'Temp (Fahrenheiht)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
        headerData.forEach(text => {
            const data = document.createElement('th');
            data.textContent = text;
            headerRow.appendChild(data);
        })

        header.appendChild(headerRow);
        hourlyData.appendChild(header);

        

        day1.hour.forEach(hour => {
            const icon = document.createElement('img');
            icon.src = 'https:'+hour.condition.icon;
            const row = document.createElement('tr');
            const rowData1 = document.createElement('td');
            const rowData2 = document.createElement('td');
            const rowData3 = document.createElement('td');
            const rowData4 = document.createElement('td');
            const rowData5 = document.createElement('td');
            const rowData6 = document.createElement('td');
            const rowData7 = document.createElement('td');
            const rowData8 = document.createElement('td');
            rowData1.textContent = hour.time.split(' ')[1];
            rowData2.appendChild(icon);
            rowData3.textContent = hour.condition.text;
            rowData4.textContent = hour.temp_f;
            rowData5.textContent = hour.precip_mm;
            rowData6.textContent = hour.wind_kph;
            rowData7.textContent = hour.humidity;
            rowData8.textContent = hour.feelslike_f;

            row.appendChild(rowData1);
            row.appendChild(rowData2);
            row.appendChild(rowData3);
            row.appendChild(rowData4);
            row.appendChild(rowData5);
            row.appendChild(rowData6);
            row.appendChild(rowData7);
            row.appendChild(rowData8);
        
            hourlyData.appendChild(row);
        })
    })
    city = '';
})
import './style.css'
// import hourly from './hourly';

const search = document.querySelector('#search');
const celcius = document.querySelector('#celcius');
const fahrenheiht = document.querySelector('#fahrenheiht');
const hourlyForecast = document.querySelector('.hourlyForecast');
const hourlyTitle = document.querySelector('.hourlyTitle');
const hourlyData = document.querySelector('.hourlyData');
const hourlyHeader = document.querySelector('.hourlyHeader');
const hourlyDate = document.querySelector('.date');
const header = document.createElement('thead');
const headerRow = document.createElement('tr');
const currentDataContainer = document.querySelector('#currentData');
const currentDataHeader = document.querySelector('#currentDataHeader');
const currentDataDateLocationCountry = document.querySelector('#currentDataDateLocationCountry');
const currentDataTempCondition = document.querySelector('#currentDataTempCondition');
const currentDataMetrics = document.querySelector('#currentDataMetrics');

let city;
hourlyForecast.style.display = "none";

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
        const currentDataHeaderTitle = document.querySelector('.currentDataHeaderTitle');
        const currentDataHeaderTimeUpdate = document.querySelector('.currentDataHeaderTimeUpdate');
        const currentDataHeaderTime = document.querySelector('.currentDataHeaderTime');
        const currentDataHeaderUpdate = document.querySelector('.currentDataHeaderUpdate');
        
        const locationData = resolvedData.location.localtime.toString().split(' ');
        currentDataHeaderTime.textContent = locationData[1]
        currentDataHeaderTitle.textContent = 'Current Weather';



        // FORECAST DATA LOGIC
        hourlyTitle.textContent = "Hourly Forecast";
        
        hourlyHeader.appendChild(hourlyTitle);
        hourlyHeader.appendChild(hourlyDate);
        // const header = document.createElement('thead');
        // const headerRow = document.createElement('tr');

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
        // hourlyData.classList.add('hourlyData');
        
        hourlyForecast.appendChild(hourlyHeader);
        hourlyForecast.appendChild(hourlyData);
        hourlyForecast.style.display = "grid";
    })
    city = '';
})

fahrenheiht.addEventListener('click', () => {
    const data = getWeather(city);
    data.then(resolve => {
        console.log(resolve);
    })
    city = '';
})

async function getWeather(location){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=3`, { mode: "cors" });
    const weatherData = await response.json();
    return weatherData;
}


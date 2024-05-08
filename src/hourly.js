function loadHourlyCelciusData(resolvedData, n = 0){
    const hourlyData = document.querySelector('.hourlyData');
    const hourlyTitle = document.querySelector('.hourlyTitle');
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    hourlyTitle.textContent = "Hourly Forecast";
    const hourlyForecast = document.querySelector('.hourlyForecast');
    hourlyForecast.style.display = "grid";

    const headerData = ['Time', 'Icon', 'Condition', 'Temp (Celcius)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
    headerData.forEach(text => {
        const data = document.createElement('th');
        data.textContent = text;
        headerRow.appendChild(data);
    })

    header.appendChild(headerRow);
    hourlyData.appendChild(header);
    const days = resolvedData.forecast.forecastday;
    days[n].hour.forEach(hour => {
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
}

function loadHourlyFahrenheihtData(resolvedData, n = 0){
    const hourlyData = document.querySelector('.hourlyData');
    const hourlyTitle = document.querySelector('.hourlyTitle');
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    hourlyTitle.textContent = "Hourly Forecast";
    const hourlyForecast = document.querySelector('.hourlyForecast');
    hourlyForecast.style.display = "grid";

    const headerData = ['Time', 'Icon', 'Condition', 'Temp (Fahrenheiht)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
    headerData.forEach(text => {
        const data = document.createElement('th');
        data.textContent = text;
        headerRow.appendChild(data);
    })

    header.appendChild(headerRow);
    hourlyData.appendChild(header);
    const days = resolvedData.forecast.forecastday;
    days[n].hour.forEach(hour => {
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
}

export default { loadHourlyCelciusData, loadHourlyFahrenheihtData};
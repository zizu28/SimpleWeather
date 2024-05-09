function getPreviousDay(daysIndex){
    if(daysIndex > 0){
        return daysIndex--;
    }
    return;
}

function getNextDay(resolvedData, daysIndex){
    const days = resolvedData.forecast.forecastday;
    if(daysIndex < days.length - 1){
        return daysIndex++;;
    }
    return;
}


export default { getNextDay, getPreviousDay };

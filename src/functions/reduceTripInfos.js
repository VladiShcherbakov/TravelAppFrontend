const calculateNextWeekEnd2 = (date, dayIndex) => {
    let nextEndDay = new Date(date);
    nextEndDay = nextEndDay.setDate(nextEndDay.getDate() + 7 - dayIndex);

    return nextEndDay;
}

const reduceTripInfos = (tripInfos) => {
    const days = Object.values(tripInfos).reduce((days, tripInfo) => {
        let timeAndDate = "";

        if (tripInfo.time.includes('T')) {   
            timeAndDate = tripInfo.time.split('T');
        } else {
            timeAndDate = tripInfo.time.split(' ');
        }

        const splittedTime = timeAndDate[1].split(':');
        const time = timeAndDate[0];
        const dayIndex = new Date(time).getDay();

        if (!days[time]) {
            days[time] = [];

            switch (dayIndex) {
                case 1:
                    days[time]['day'] = 'Пн';
                    break;
                case 2:
                    days[time]['day'] = 'Вт';
                    break;
                case 3:
                    days[time]['day'] = 'Ср';
                    break;
                case 4:
                    days[time]['day'] = 'Чт';    
                    break;
                case 5:
                    days[time]['day'] = 'Пт';
                        break;
                case 6:
                    days[time]['day'] = 'Сб';
                    break;
                case 0:
                    days[time]['day'] = 'Вс';
                    break;
                default:
                    break;  
            }

            days[time]["date"] = time;
        }

        tripInfo.time = splittedTime[0] + ":" + splittedTime[1];
        days[time].push(tripInfo);

        return days;
    }, {});

    const orderedDays = Object.keys(days).sort().reduce(
        (obj, key) => { 
            obj[key] = days[key]; 
            return obj;
        }, 
    {});

    let weekNum = 0;
    let endDay = new Date(0);
    const weeks = Object.keys(orderedDays).reduce((weeks, day) => {
        const currentDate = new Date(day);
        const dayIndex = new Date(day).getDay();

        if (endDay < currentDate) {
            endDay = calculateNextWeekEnd2(day, dayIndex);
            weekNum += 1;
        }
           
        const weekKey = `week${weekNum}`;

        if (!weeks[weekKey])
        {
            weeks[weekKey] = [];
            weeks[weekKey]['text'] = `Неделя ${weekNum}`
        }

        weeks[weekKey].push(orderedDays[day]);

        return weeks;
    }, {});

    return weeks;
}

export default reduceTripInfos;
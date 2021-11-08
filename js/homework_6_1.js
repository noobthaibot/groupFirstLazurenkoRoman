const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function getCountWorkDays(date1, date2) {
    firstDay = Date.parse(date1);
    lastDay = Date.parse(date2);
    // console.log(firstDay,lastDay);
    if (lastDay < firstDay) {
        return 0;
    }
    let totalDays = (lastDay - firstDay) / MS_DAY;
    // console.log(firstDay);
    // console.log(lastDay);
    let workDays = (totalDays / 7) * 5;
    // console.log(workDays);
    workDays = Math.floor(workDays);
    // console.log(workDays);
    return workDays;
}

console.log(getCountWorkDays("2021-08-11", "2021-10-01"));



const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function getCountWorkDays(date1, date2) {
    firstDay = Date.parse(date1);
    lastDay = Date.parse(date2);

    if (lastDay < firstDay) {
        return 0;
    }
    let totalDays = (lastDay - firstDay) / MS_DAY;


    let workDays = (totalDays / 7) * 5;

    workDays = Math.floor(workDays);

    return workDays;
}

console.log(getCountWorkDays("2021-08-11", "2021-10-01"));



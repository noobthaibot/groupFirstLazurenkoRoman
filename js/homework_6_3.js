const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const DAYS_OF_WEEK = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

function getDay(date) {
    if (date instanceof Date) {
        if (date.getDay() === 1) {
            console.log(DAYS_OF_WEEK[0]);
        } else if (date.getDay() === 2) {
            console.log(DAYS_OF_WEEK[1]);
        } else if (date.getDay() === 3) {
            console.log(DAYS_OF_WEEK[2]);
        } else if (date.getDay() === 4) {
            console.log(DAYS_OF_WEEK[3]);
        } else if (date.getDay() === 5) {
            console.log(DAYS_OF_WEEK[4]);
        } else if (date.getDay() === 6) {
            console.log(DAYS_OF_WEEK[5]);
        } else {
            console.log(DAYS_OF_WEEK[6]);
        }
        return;
    }
    return null;
}
getDay((new Date(2022, 0, 1)));

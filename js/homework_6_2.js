function daysToNewYear (date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
        let msDayDiff = Math.abs(date1.getTime() - date2.getTime());
        let result = Math.trunc(msDayDiff / MS_DAY);
        return result;
    }
    return null;
}

console.log(daysToNewYear(new Date(), new Date(2022, 00, 01)));
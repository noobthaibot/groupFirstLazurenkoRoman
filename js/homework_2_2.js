let number = prompt ('Enter number');
number = Number(number);
let result = number % 100;
if (result >= 5 && result <= 20) {
    console.log(number + ' дней');
} else {
    result = number % 10;
    if (result == 1) {
        console.log(number + ' день'); 
    } else if (result >= 2 && result <= 4) {
        console.log(number + ' дня');
    } else {
        console.log(number + ' дней');
    }
}


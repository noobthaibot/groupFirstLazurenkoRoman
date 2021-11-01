const MAX_COUNT_ATTEMPTS = 5;
let min = 0;
let max = 100;
let attempt = 0;
do {
    _number = min + (max - min) / 2;
    let answer = confirm('Ваше число больше числа '+ _number + '?');
    attempt += 1;
    if (answer) {
        min = _number;
    } else {
        max = _number;
    }
    console.log(max, min);
} while ((max - min) > 1 || attempt < MAX_COUNT_ATTEMPTS); 
alert('Результат ' + Math.trunc(max));


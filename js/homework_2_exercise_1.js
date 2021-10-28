let n;
let d;
const PI = 3.14;
const INCH = 2.54;
n = prompt('Введите растояние');
n = Number(n);
d = prompt('Введите диаметр колеса в дюймах');
d = Number(d);
d = d * INCH;
let result = d * PI;
result = Math.round(result);
if (n !== Number(n) || d !== Number(d)) {
    console.log('Вы ввели недопустимое значение'); 
} else {
    console.log(result + ' - количество оборотов одного колеса');
    console.log(result * 4 + ' - количество оборотов всех колес');
}
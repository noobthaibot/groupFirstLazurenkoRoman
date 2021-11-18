let points = {
    Вася: 200,
    Петя: 300,
    Даша: 250,
    Андрей: 150,
    Сергей: 450,
};

let values = Object.entries(points);

let totalSum = 0;
let min = Infinity;
let max = -Infinity;
let minName = "";
let maxName = "";
for (const value of values) {
    let name = value[0];
    let point = value[1];
    // console.log(name);
    // console.log(point);
    if (point > max) {
        max = point;
        maxName = name;
    }
    // console.log(maxName);

    if (point < min) {
        min = point;
        minName = name;
    }

    totalSum += point;
}

console.log('Сумма всех оценок: ', totalSum);
console.log("Минимальная оценка у", minName);
console.log("Максимальная оценка у", maxName);

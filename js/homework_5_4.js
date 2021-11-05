var points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
    };

let VALUES = Object.values(points);
console.log(VALUES);



let totalSum = 0;
for (const value of VALUES) {
    console.log(value);
    totalSum += value;
}

console.log('Сумма всех оценок: ', totalSum);


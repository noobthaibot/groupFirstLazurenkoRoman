let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
if (firstNumber !== Number(firstNumber) || secondNumber !== Number(secondNumber)) {
    console.error('Ошибка,введите числовое значение');
} else {
    let maxNumber = Math.max(firstNumber, secondNumber);
    let minNumber = Math.min(firstNumber, secondNumber);
    let multiplicity = 0;
    let sum = 0;
        for (let i = minNumber; i <= maxNumber; i += 1) {
            if (i % 6 === 0) {
                console.log(i);
                sum += i;
                multiplicity = Math.trunc((maxNumber - minNumber) / 6);
            }
        }
    alert(`Количество чисел кратных шести - ${multiplicity}, cумма этих чисел - ${sum} `);
}
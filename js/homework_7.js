function Calculator(name) {
    this.name = name;
}
let calc = new Calculator("Мой калькулятор");

calc.getSum = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

calc.getMultiply = function () {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
        result = arguments[i] * result;
    }
    return result;
};
calc.getSubtraction = function (a, b) {
    let result = a - b;
    return result;
};
calc.getDivision = function (a, b) {
    let result = a / b;
    return result;
};


console.log("Сумма=" + calc.getSum(3, 54, 23, 53));
console.log("Результат умножения=" + calc.getMultiply(3, 5, 6, 5));
console.log("Результат вычетания=" + calc.getSubtraction(15, 3));
console.log("Остаток=" + calc.getDivision(144, 45));
// console.log(Calculator);
// console.log(calc);

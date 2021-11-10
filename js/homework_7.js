
function getSum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function getMultiply() {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
        result = arguments[i] * result;
    }
    return result;
}
function getSubtraction(a, b) {
    let result = a - b;
    return result;
}
function getDivision(a, b) {
    let result = a / b;
    return result;
}

console.log("Сумма=" + getSum(3, 54, 23, 53));
console.log("Результат умножения=" + getMultiply(3, 5, 6, 5));
console.log("Результат вычетания=" + getSubtraction(15, 3));
console.log("Остаток=" + getDivision(144, 45));

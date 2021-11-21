function Calculator(name) {
    this.name = name;
    this.memory = [];

    this.setToMemory = function (calcAction, calcResult, ...args) {
        let date = new Date();
        let calcName = String(this.name);

        let time = `(${date.getMinutes()}.${
            date.getMonth() + 1
        }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}): `;

        let dataToWrite = calcAction + " = " + calcResult + ", (" + args + ")";

        this.memory.push(calcName + time + dataToWrite);
    };
    this.memoryLog = function () {
        console.log("История вычеслений");
        for (const i in this.memory) {
        }
    };

    this.memoryClean = function () {
        this.memory = [];
        console.log("Данные памяти очищены");
    };

    this.getSum = function (...args) {
        for (let i in args) {
            if (isNaN(args[i])) return "Вы ввели недопустимое значение";
        }

        let result = 0;
        for (let i = 0; i < args.length; i++) {
            result += args[i];
        }

        this.setToMemory("Сумма чисел", result, args);

        return result;
    };

    this.getMultiply = function (...args) {
        for (let i in args) {
            if (isNaN(args[i])) return "Вы ввели недопустимое значение";
        }
        let result = 1;
        for (let i = 0; i < args.length; i++) {
            result = args[i] * result;
        }

        this.setToMemory("Умножение чисел", result, args);

        return result;
    };
    this.getSubtraction = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "Вы ввели недопустимое значение";

        let result = a - b;

        this.setToMemory("Остаток от числа", a - b, a, b);

        return result;
    };
    this.getDivision = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "Вы ввели недопустимое значение";

        let result = a / b;

        this.setToMemory("Деление чисел", a / b, a, b);

        return result;
    };
}

let calc = new Calculator("Мой калькулятор");
calc.getSum();
calc.getMultiply();
calc.getSubtraction();
calc.getDivision();


calc.memoryClean();

console.log("Сумма=" + calc.getSum(3, 54, 23, 53));

console.log("Результат умножения=" + calc.getMultiply(3, 5, 6, 5));

console.log("Результат вычетания=" + calc.getSubtraction(15, 3));

console.log("Остаток=" + calc.getDivision(144, 45));

calc.memoryLog();

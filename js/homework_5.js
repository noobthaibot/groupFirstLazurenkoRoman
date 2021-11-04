let getSorted = function (string) {
    if (typeof string !== "string") {
        return false;
    }

    let arr = string.split(" ");
    return arr.sort().join(" ");
}

console.log(getSorted("цветы горшок яблоко ананас ключ"));



const numbers = [5, 23, 43, 65, 76, 34, 3, 15, -3, 54, -12];

let getRandomElement = function (array) {
    if (!Array.isArray(array)) {
        return false;
    }

    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};

console.log(getRandomElement(numbers));



const numbers = [5, 23, 43, 65, 76, 34, 3, 15, -3, 54, -12];

let getMax = function (arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};

console.log(getMax(numbers));

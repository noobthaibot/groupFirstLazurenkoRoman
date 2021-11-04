const numbers = [5, 23, 43, 65, 76, 34, 3, 15, -3, 54, -12];

let getRandomElement = function (array) {
    if (!Array.isArray(array)) {
        return false;
    }

    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};

console.log(getRandomElement(numbers));

const numbers = [5, 23, 43, 65, 76, 34, 3, 15, -3, 54]
let smallestNumber = numbers[0];

for (const number of nubmers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log('smallestNumber: ', smallestNumber);

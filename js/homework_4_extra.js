let cities = [];

enteredCity = prompt("Введите город");

cities.push(enteredCity);

console.log(cities);

let lastWord = cities[cities.length - 1];
let lastWordLetter = lastWord.slice(-1).toUpperCase();

console.log(lastWord);
console.log(lastWordLetter);

let newWord = prompt(`Введите город, который кончается на букву - ${lastWordLetter}`);

let newWordLetter = newWord.substring(0, 1);

for (const city of cities) {
    if (newWordLetter !== lastWordLetter) {
        alert("Вы проиграли");
    } else {
        cities.push(newWord);
        console.log(cities);
        newWord = lastWord;
        console.log(lastWord);
        console.log(lastWordLetter);
        enteredCity = prompt(`Введите город, который кончается на букву - ${lastWordLetter}`);
        cities.push(newWord);
        console.log(cities);
    }
}


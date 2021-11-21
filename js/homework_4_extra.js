function startGameCityChain() {
    const MAX_COUNT_ATTEMPTS = 500;

    let firstLetter;
    let lastLetter;
    let city;
    let points = 0;
    let cities = [];

    city = prompt("Введите первый город");
    cities.push(city);

    lastLetter = city[city.length - 1];

    let i = 0;

    while (i < MAX_COUNT_ATTEMPTS) {
        i++;
        city = prompt(`Введите город на букву '${lastLetter}'.`);
        if (cities.includes(city)) {
            alert(`Город "${city}" уже использовался`);
            continue;
        } else if (city === null) {
            break;
        } else {
            cities.push(city);
        }

        firstLetter = city[0];

        if (
            firstLetter !== lastLetter &&
            firstLetter !== lastLetter.toUpperCase() &&
            firstLetter !== lastLetter.toLowerCase()
        ) {
            alert(`Конец игры. Всего очков:${points}.`);
            return;
        }
        points++;

        lastLetter = city[city.length - 1];
        if (lastLetter === "ь" || lastLetter === "ы") {
            lastLetter = city[city.length - 2];
        }

        console.log(cities);
    }

    alert(`Конец игры. Всего очков: ${points}.`);
}
startGameCityChain();

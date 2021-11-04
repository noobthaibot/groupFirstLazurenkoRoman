function start_game_city_chain(first_city = "Киев") {
    if (typeof first_city !== "string") {
        return false;
    }

    function add_to_memory(memory_array, city) {
        memory_array.push(city.toLowerCase());
    }

    let cities = [first_city];
    add_to_memory(cities, first_city);
    let points = 0;

    while (true) {
        let new_city = prompt("Введите название города", "");
        console.log(new_city.toLowerCase()),
            cities,
            cities.indexOf(new_city.toLowerCase());
        if (cities.indexOf(new_city) > -1) {
            alert("Такой город уже вводился");
        }

        let prev_city = cities[cities.length - 1];

        let last_char = prev_city[prev_city.length - 1];
        let first_char = new_city[0];

        last_char = last_char.tolowerCase();
        first_char = first_char.tolowerCase();

        if (last_char === first_char) {
            points++;
            add_to_memory(cities, new_city);
        } else {
            alert(`Игра окончена. Ваши очки: ${points}`);
            break;
        }

        console.log(last_char, first_char);
    }
}

start_game_city_chain("Краматорск");

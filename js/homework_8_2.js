let div = document.createElement("div");
div.style.width = "200px";
div.style.height = "100px";
div.style.background = "teal";

div.className = "div1";

document.body.prepend(div);

let div2 = document.createElement("div");
div2.style.width = "400px";
div2.style.height = "100px";
div2.style.background = "rebeccapurple";

div2.className = "div2";

document.body.append(div2);

div.addEventListener("mouseenter", () => {
    console.log(`Ширина первого прямоугольника = ${div.style.width}`);
});

div2.addEventListener("mouseenter", () => {
    console.log(`Ширина второго прямоугольника = ${div2.style.width}`);
});

div.addEventListener("click", () => {
    alert(`Цвет этого прямоугольника - Бирюзовый`);
});

div2.addEventListener("click", () => {
    alert(`Цвет этого прямоугольника - Фиолетовый Ребекки`);
});

// тут был паяльник

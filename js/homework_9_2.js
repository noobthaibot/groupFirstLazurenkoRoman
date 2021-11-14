$(document).ready(function () {
    $("body").css("display", "block");

    $("body").append("<div></div>");
    $("div")
        .addClass("div1")
        .css({ width: "100px", height: "100px", background: "blue" });

    $("body").append("<div></div>");
    $("body div:last-child")
        .addClass("div2")
        .css({ width: "200px", height: "200px", background: "yellow" });

    $(".div1").mouseenter(function () {
        console.log(`Ширина первого прямоугольника = 100px`);
    });
    $(".div2").mouseenter(function () {
        console.log(`Ширина второго прямоугольника = 200px`);
    });
    $(".div1").click(function () {
        alert(`Цвет этого прямоугольника - голубой`);
    });
    $(".div2").click(function () {
        alert(`Цвет этого прямоугольника - желтый`);
    });
});
// тут был паяльник

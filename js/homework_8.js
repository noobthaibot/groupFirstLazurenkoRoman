let div = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
let div7 = document.createElement("div");
let div8 = document.createElement("div");
let div9 = document.createElement("div");

function toBlue(div) {
    div.classList.add("atributes");
    document.body.append(div);
}
function toGreen(div) {
    div.classList.add("atributes2");
    console.log(div);
    setTimeout(div, 1000);
}
function toYellow(body,div) {
    body.classList.add('main')
    div.classList.add('atributes3')

}

toBlue(div);
toBlue(div1);
toBlue(div2);
toBlue(div3);
toBlue(div4);
toBlue(div5);
toBlue(div6);
toBlue(div7);
toBlue(div8);
toBlue(div9);

setTimeout(toGreen, 1000);

toGreen(div1);
toGreen(div);
toGreen(div2);
toGreen(div3);
toGreen(div4);
toGreen(div5);
toGreen(div6);
toGreen(div7);
toGreen(div8);
toGreen(div9);

toYellow(body,div)
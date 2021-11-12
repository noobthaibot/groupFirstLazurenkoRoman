function getFirstDivs() {
    for (let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.className = "atributes";
        document.body.prepend(div);
    }
}
function getSecondDivs() {
    let divs = document.querySelectorAll(".atributes");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("atributes2");
    }
}
function getThirdDivs() {
    let divs = document.querySelectorAll(".atributes2");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("atributes3");
        if ((i + 1) % 3 === 0) {
            divs[i].classList.add("atributes4");
        }
    }
}
function getFourthDivs() {
    let divs = document.querySelectorAll(".atributes");

    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
    document.body.classList.add("black");
}

getFirstDivs();
setTimeout(getSecondDivs, 3000);
setTimeout(getThirdDivs, 6000);
setTimeout(getFourthDivs, 9000);

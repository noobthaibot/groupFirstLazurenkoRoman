function getFirstDivs() {
    for (let i = 0; i < 1000; i++) {
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

function addText() {
    let divs = document.querySelectorAll(".atributes2");

    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = [i];
        console.log([i]);
    }
}

function getThirdDivs() {
    let divs = document.querySelectorAll(".atributes2");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("atributes3");
        if ((i + 1) % 3 === 0) {
            divs[i].classList.add("atributes4");
        } else if ((i + 1) % 17 === 0) {
            divs[i].classList.add("triangle");
        }
    }
}

function getFourthDivs() {
    let divs = document.querySelectorAll(".triangle");

    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
    let divs1 = document.querySelectorAll(".atributes");
    for (let i = 0; i < divs1.length; i++) {
        divs1[i].classList.add("atributes6");
    }
}

getFirstDivs();
setTimeout(getSecondDivs, 2000);
setTimeout(addText, 4000);
setTimeout(getThirdDivs, 6000);
setTimeout(getFourthDivs, 8000);

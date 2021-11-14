$(document).ready(function () {
    function getFirstDivs() {
        for (let i = 0; i < 100; i++) {
            $("body").append("<div></div>");
            $("body div").addClass("atributes");
        }
    }
    function getSecondDivs() {
        let divs = $(".atributes");
        for (let i = 0; i < divs.length; i++) {
            divs.addClass("atributes2");
        }
    }

    function addText() {
        let divs = document.querySelectorAll(".atributes2");
        for (let i = 0; i < divs.length; i++) {
            divs[i].innerHTML = [i];
            console.log(typeof divs);
        }
    }

    function getThirdDivs() {
        let divs = $("body div:nth-child(3n+1)");

        for (let i = 0; i < divs.length; i++) {
            divs.addClass("atributes3");
            divs.removeClass("atributes atributes2");
        }
        let divs2 = $("body div:nth-child(15n+1)");
        for (let i = 0; i < divs2.length; i++) {
            divs2.addClass("triangle");
        }
        divs2.removeClass("atributes3");
    }

    function getFourthDivs() {
        if ($("body div")) $(".atributes3").remove();
    }

    setTimeout(getFirstDivs, 2000);
    setTimeout(getSecondDivs, 4000);
    setTimeout(addText, 6000);
    setTimeout(getThirdDivs, 8000);
    setTimeout(getFourthDivs, 10000);
});

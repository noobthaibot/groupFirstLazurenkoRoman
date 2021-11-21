function setDate() {
    let date = new Date();
    console.log(date);

    const HOUR = date.getHours();

    const MINUTES = date.getMinutes();

    const SECONDS = date.getSeconds();

    let hourDegs = (HOUR / 12) * 360 + (MINUTES / 60) * 30 + 90 - 360;
    document.querySelector(".first-arrow").style.transform = `rotate(${hourDegs}deg)`;
    let minDegs = MINUTES * 12 - 60;
    document.querySelector(".second-arrow").style.transform = `rotate(${minDegs}deg)`;
    let secondsDegs = (SECONDS / 60) * 360 + 90 - 360;
    document.querySelector(".third-arrow").style.transform = `rotate(${secondsDegs}deg)`;
}
setInterval(setDate, 1000);
setDate();

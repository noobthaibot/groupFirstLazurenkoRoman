let getSorted = function (string) {
    if (typeof string !== "string") {
        return false;
    }

    let arr = string.split(" ");
    return arr.sort().join(" ");
};

console.log(getSorted("цветы горшок яблоко ананас ключ"));

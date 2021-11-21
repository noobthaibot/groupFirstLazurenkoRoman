function toReverseString(string) {
    let splittedString = string.split("");

    let reversedString = splittedString.reverse();

    let joinedString = reversedString.join("");
    return joinedString;
}

console.log(toReverseString("Sator"));
console.log(toReverseString("Arepo"));
console.log(toReverseString("Tenet"));
console.log(toReverseString("Opera"));
console.log(toReverseString("Rotas"));

// function Calculator() {
//     this.sum = function (value,...arg) {
//         return value + this.b;
//     };
//     this.subtraction = function () {
//         return this.a - this.b;
//     };
//     this.multiply = function () {
//         return this.a * this.b;
//     };
//     this.division = function () {
//         return this.a / this.b;
//     };
// }

// let calculator = new Calculator();

// function input (value,...arg) {
//     this.value = +prompt("Введите первое число", 0);
//     // this.b = +prompt("Введите второе число", 0);
// };

// function sum() {
//     let total;
    
//     for (const number of arguments) {
//         // console.log(number);
       
//         total += Number(number);
//         console.log(total);
        
//     }
//     return total;
// }
let arr = [];
number = prompt('Введите число');
arr.push(number);

confirm('Ввести еще число?');
if (confirm === true) {
    newNumber = prompt('Введите число');
    arr.push(newNumber);
    console.log(arr);
    
} else function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        }
    console.log(sum);
    }




console.log(arr);





// console.log("Сумма=" + sum(3, 54, 23));
// console.log("Остаток=" + calculator.subtraction());
// console.log("Результат умножения=" + calculator.multiply());
// console.log("Результат деления=" + calculator.division());

const cards = [
    'Карточка-1' ,
    'Карточка-2' ,
    'Карточка-3' ,
    'Карточка-4' ,
    'Карточка-5' ,
]

console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// console.table(cards.splice(index, 1));




const cardToInsert = 'Карточка-6';
const index = 3;
 
cards.splice(1, 0, 5, 10, 20, 30);
console.table(cards)




// const cardToUpdate = 'Карточка-4';






// let _array = [];
// for (let i = 500; i <= 888; i += 1) {
// if (i % 2 === 0) {
//     _array.push(i);
//     }
// }
// console.log(_array);
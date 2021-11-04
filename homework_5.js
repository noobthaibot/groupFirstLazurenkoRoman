// function random(min, max) {
//   if (typeof min !== "number" || typeof max !== "number") {
//     return false;
//   }
//   let result = 0;

//   let temp = Math.random();
//   result = min + (max - min) * temp;
//   result = Math.floor(result);

//   return result;
// }

// let temp = Math.random();
// console.log(temp);

// let a = random(10,20);
// console.log(a);

// ex - 2````````````````````````````````````````````````

// function get_type_file(file_name) {
//   if (typeOf(file_name) !== 'string') {
//     return false;
//   }
//   let result = '';

//   let array = file_name.split('');

//   let index_of_dot = array.indexOf('.');

//   let temp = array.slice(index_of_dot, array.length);

//   result = temp.join('');

//   return result;
// }

// get_type_file('readme.txt');

// console.log(get_type_file('readme.txt'));

// ex - 3 ``````````````````````````````````````````````````

// function truncate(str, maxLength) {
//   if (typeof str !== "string") {
//     return false;
//   }
//   if (typeof maxLength !== "number") {
//     return false;
//   }
//   let result = str;

//   if (str.length > maxLength) {
//     let temp = str.slice(0, maxLength - 3);
//     temp = temp + '...';
//     console.log(temp);
//   }
//   return result;
// }
// console.log(truncate());
// console.log(a, a.length);

// ex - 4 ``````````````````````````````````````````````````````````

// function get_short_fio(full_fio) {
//   if (typeof str !== "string") {
//     return false;
//   }

//   let result = "";

//   let array_part_fio = full_fio.split("");
//   if (array_part_fio.length !== 3) {
//     return false;
//   }

//   let short_name = array_part_fio[1].slice(0, 1);
//   let short_last_name = array_part_fio[2].slice(0, 1);
//   short_name = short_name.toUpperCase() + ".";

//   result = `${array_part_fio[0]} ${short_name} ${shorl_last_name}`;

//   return result;
// }

// let a = "".split(",1");

// console.log(a);

// ex - 5 ````````````````````````````````````

function get_uniq_arr(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let result = true;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let index = arr.indexOf(element, i + 1);
    while (index > -1) {
      arr.splice(index, 1);
      result = false;
      index = arr.indexOf(element, i + 1);
    }

    console.log(element, index);
  }

  return result;
}

let array = [];
let a = get_uniq_arr(array);
console.log(a);

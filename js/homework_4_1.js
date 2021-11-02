const numbers = [5, 23, 43, 65, 76, 34, 3, 15, -3, 54, -12]

let get_min = function (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }

console.log(get_min(numbers));


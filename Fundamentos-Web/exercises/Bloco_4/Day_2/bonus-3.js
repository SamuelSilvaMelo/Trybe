

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multNumbers = [];
let index2 = 0;

for (let index = 1; index <= numbers.length; index += 1) {

  for (index2; index2 < index; index2 += 1) {

    if (numbers[index] !== undefined) {
      multNumbers.push(numbers[index2] * numbers[index]);
    } else {
      multNumbers.push(numbers[index2] * 2);
    }

  }
  
}

console.log(multNumbers)
// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let samllestNumber;

  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] <= numbers[0]) {
      samllestNumber = numbers[i]
    }
  }

    console.log(samllestNumber)
    
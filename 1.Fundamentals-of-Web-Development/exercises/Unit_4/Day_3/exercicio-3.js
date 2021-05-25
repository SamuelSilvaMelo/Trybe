let number = 5;

let minhaString = '';

for (let columnIndex = 1; columnIndex <= number; columnIndex +=1) {
  minhaString += '*';

  let espaco = '';

  for (let lineIndex = 0; lineIndex < number - columnIndex; lineIndex += 1) {

    espaco += ' ';

  } 

  console.log(espaco + minhaString);

}

// 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let addNumbers = 0;

    for (let index = 0; index < numbers.length; index += 1){
      addNumbers = addNumbers + numbers[index];
    }

    console.log(addNumbers);
    
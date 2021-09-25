const { questionFloat } = require('readline-sync');

function imcClassification(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  };

  if (imc < 24.9) {
    return 'Peso normal';
  };

  if (imc < 29.9) {
    return 'Acima do peso (sobrepeso)';
  };

  if (imc < 34.9) {
    return 'Obesidade grau I';
  };

  if (imc < 39.9) {
    return 'Obesidade grau II';
  };

  if (imc > 40) {
    return 'Obesidade graus III e IV';
  };
}

function calcImc() {
  const height = questionFloat(
    'Qual o sua altura (em metros)? ', { bufferSize: 3 }
  );
  const weight = questionFloat(
    'Qual o seu peso (em kgs)? ', { bufferSize: 4 }
  );

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  console.log(
    `
    Você possui ${height} metros e ${weight}kgs.
    Seu IMC é ${imc}.
    Sua classificação é: ${imcClassification(imc)}.
    `
  );
}

calcImc();

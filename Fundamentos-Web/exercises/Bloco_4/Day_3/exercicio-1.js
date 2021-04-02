let n = 6

let resultado = ''

for (let index = 0; index < n; index += 1) {
  resultado += '*'; // esse comando é equivalente ao resultado = resultado + '*'
}

if (n > 1){
  for (let index = 0; index < n; index += 1) {
    console.log(resultado);
  }
} else {
  console.log('Erro, número precisa ser maior que 1')
}

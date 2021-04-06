// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

//removendo o elemento #segundoEUltimoFilhoDoFilho
let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
document.querySelector('#elementoOndeVoceEsta').removeChild(segundoEUltimoFilhoDoFilho);

//removendo o elemento #primeiroFilho
let primeiroFilho = document.querySelector('#primeiroFilho');
document.querySelector('#pai').removeChild(primeiroFilho);

//removendo o elemento #terceiroFilho
let terceiroFilho = document.querySelector('#terceiroFilho');
document.querySelector('#pai').removeChild(terceiroFilho);

//removendo o elemento #quartoEUltimoFilho
let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
document.querySelector('#pai').removeChild(quartoEUltimoFilho);

//fazendo a cópia do #pai para ser primeiro filho do <body>
let copiaPaiDoPai = document.createElement('div');
copiaPaiDoPai = document.querySelector('#pai');
document.querySelector('body').appendChild(copiaPaiDoPai);

//removendo o elemento #paiDoPai
let paiDoPai = document.querySelector('#paiDoPai');
document.querySelector('body').removeChild(paiDoPai);

//removendo o elemento/texto "Atenção!"

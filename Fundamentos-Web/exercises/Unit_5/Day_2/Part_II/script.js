// 1. Crie um irmão para elementoOndeVoceEsta;
// 2. Crie um filho para elementoOndeVoceEsta;
// 3. Crie um filho para primeiroFilhoDoFilho;
// 4. A partir desse filho criado, acesse terceiroFilho.

let irmaoDoFilhoDoFilho = document.createElement('div');
irmaoDoFilhoDoFilho.innerText = 'Esse é o amigo do filho do filho';
document.querySelector('#elementoOndeVoceEsta').appendChild(irmaoDoFilhoDoFilho);

let outroFilho = document.createElement('div');
outroFilho.innerText = "Ele descobriu esse filho depois";
document.querySelector('#elementoOndeVoceEsta').appendChild(outroFilho);

let filhoDoPrimeiroFilhoDoFilho = document.createElement('div');
filhoDoPrimeiroFilhoDoFilho.innerText = 'O primeiro filho do filho teve um filho';
document.querySelector('#primeiroFilhoDoFilho').appendChild(filhoDoPrimeiroFilhoDoFilho);

document.querySelector('#primeiroFilhoDoFilho div').parentElement.parentElement.parentElement.children[2]

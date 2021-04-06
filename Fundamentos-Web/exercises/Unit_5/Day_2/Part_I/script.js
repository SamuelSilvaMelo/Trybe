// 1. Acesse o elemento elementoOndeVoceEsta;
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele;
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?;
// 4. Acesse o primeiroFilho a partir de pai;
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta;
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta;
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta;
// 8. Agora acesse o terceiroFilho a partir de pai.

document.querySelector('#elementoOndeVoceEsta');

document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "red";

document.querySelector('#primeiroFilhoDoFilho').innerHTML = "<p> Adiciona um texto ao elemento que contem o <em>id</em> primeiroFilhoDoFilho.</p>";

document.querySelector('#pai').firstElementChild;

document.querySelector('#elementoOndeVoceEsta').parentNode.firstElementChild;

document.querySelector('#elementoOndeVoceEsta').parentNode.innerText;

document.querySelector('#elementoOndeVoceEsta').parentElement.children[2];

document.querySelector('#pai').children[2];
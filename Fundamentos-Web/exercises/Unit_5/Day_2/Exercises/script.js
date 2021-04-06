// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let tituloH1 = document.createElement('h1');
tituloH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.querySelector('body').appendChild(tituloH1);

// 2. Adicione a tag div com a classe main-content como filho da tag body ;

let createDiv = document.createElement('div');
createDiv.className = 'main-content';
document.querySelector('body').appendChild(createDiv);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let createDiv2 = document.createElement('div');
createDiv2.className = 'center-content';
document.querySelector('.main-content').appendChild(createDiv2);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Aprendendo a trabalhar com elementos <strong>HTML</strong> com o <strong>JavaScript</strong>.';
document.querySelector('.center-content').appendChild(createParagraph);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divLeftContent = document.createElement('div')
divLeftContent.className = 'left-content';
document.querySelector('.main-content').appendChild(divLeftContent);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(divRightContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
document.querySelector('.left-content').appendChild(createImage);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let createList = document.createElement('ul');
createList.className = 'numbers-list'
document.querySelector('.right-content').appendChild(createList);

let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

let list = document.querySelector('.numbers-list');

for (let index = 0; index < arrayNumbers.length; index += 1) {
  let numbers = arrayNumbers[index];

  let createItems = document.createElement('li');
  createItems.innerText = numbers;

  list.appendChild(createItems);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index = 0; index < 3; index += 1) {
  if (index < 3) {
    let createH3 = document.createElement('h3');
    createH3.className = 'tag-h3'
    document.querySelector('.main-content').appendChild(createH3);
  }
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1. Adicione a classe title na tag h1 criada;

tituloH1.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;

let addDescriptionH3 = document.querySelectorAll('.tag-h3');

for (let index = 0; index < addDescriptionH3.length; index += 1) {
  addDescriptionH3[index].className = 'description';
}

// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild() ;

let removeLeftContent = document.querySelector('.left-content');
document.querySelector('.main-content').removeChild(removeLeftContent);

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;

let centerRightContent = document.querySelector('.right-content');
centerRightContent.style.marginRight = 'auto';


// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

let changeBackgroundCenterContent = document.querySelector('.center-content').parentNode;
changeBackgroundCenterContent.style.backgroundColor = 'green';

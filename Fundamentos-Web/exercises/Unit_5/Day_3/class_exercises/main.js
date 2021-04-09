const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele; CHECK

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado; CHECK*/ 

function addClassTech(element) {
  divUm.className = '';
  divDois.className = '';
  divTres.className = '';
  element.target.className = 'tech';
};

divUm.addEventListener('click', addClassTech);
divDois.addEventListener('click', addClassTech);
divTres.addEventListener('click', addClassTech);

/*2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? CHECK

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; CHECK */

function changeText() {
  let changeItem = document.querySelector('.tech')
  changeItem.innerText = 'Esse elemento foi selecionado'
}

input.addEventListener('keyup', changeText);

/*4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página; CHECK*/

function redirect() {
  window.location.href = 'https://www.google.com.br/'
}

myWebpage.addEventListener('dblclick', redirect);

/*4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; CHECK */

function changeColor(element) {
  let location = element.target;
  location.style.color = 'red';
}

myWebpage.addEventListener('mouseover', changeColor)

/*Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.*/

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let monthDay = dezDaysList[index];

  let sundayToSaturday = document.getElementById('days');
  let weekDay = document.createElement('li');
  
  weekDay.className = 'day';

  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    weekDay.classList.add('holiday');
  }

  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    weekDay.classList.add('friday');
  }

  weekDay.innerText = monthDay;
  
  sundayToSaturday.appendChild(weekDay);

};

// Exercício 2:

  let button = document.createElement('button');

  button.id = 'btn-holiday'
  button.innerText = 'Feriados'

  let buttonsContainer = document.querySelector('.buttons-container')

  buttonsContainer.appendChild(button)

// function holidays(Feriados) {
//   let button = document.createElement('button');
//   button.id = 'btn-holiday'
//   button.innerText = Feriados
//   let buttonsContainer = document.querySelector('.buttons-container')
//   buttonsContainer.appendChild(button)
// }

// Exercício 3:

function changeHolidayColor() {
  let holidays = document.querySelectorAll('.holiday');
  let currentColor = document.querySelector('.holiday').style.backgroundColor;

  for (let index = 0; index < holidays.length; index += 1) {
    if (currentColor === 'rgb(196, 190, 190)') {
    holidays[index].style.backgroundColor = 'rgb(238,238,238)';
  } else {
    holidays[index].style.backgroundColor = 'rgb(196,190,190)';
  }
  
  }
}

let btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', changeHolidayColor);

// Exercício 4:

function createFriday(SextaFeira) {

  let buttonsContainer = document.querySelector('.buttons-container');
  let createFridayButtom = document.createElement('button');
  let fridayButtom = createFridayButtom;
  fridayButtom.id = 'btn-friday';
  fridayButtom.innerText = SextaFeira;

  buttonsContainer.appendChild(fridayButtom);

}

createFriday('Sexta-feira');

// Exercício 5:

function changeFridayText() {
  let fridayList = document.querySelectorAll('.friday');
  let saveFridays = ['4', '11', '18', '25']

  for (let index = 0; index < fridayList.length; index += 1) {
    if (fridayList[index].innerText !== 'SEXTOUU!') {
      fridayList[index].innerText = 'SEXTOUU!';
    } else {
      fridayList[index].innerText = saveFridays[index];
    }
  }
}

let fridayButtom = document.getElementById('btn-friday');

fridayButtom.addEventListener('click', changeFridayText);

// Exercício 6:
function mouseOver() {

  function changeStyle(event) {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  }

  let days = document.querySelector('#days');

  days.addEventListener('mouseover', changeStyle)
};

function mouseOut() {

  function changeStyle(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  }

let days = document.querySelector('#days');

days.addEventListener('mouseout', changeStyle);
};


mouseOver();
mouseOut();

// 7. 

function addTaskName(string) {

  let spanTask = document.createElement('span');
  spanTask.innerText = string;

  document.querySelector('.my-tasks').appendChild(spanTask);

}

addTaskName('Tarefas: ');

// 8.

function createColor(color) {
  let legend = document.createElement('div');
  legend.className = 'task'
  legend.style.backgroundColor = color

  let myTasks = document.querySelector('.my-tasks')
  myTasks.appendChild(legend)
}

createColor('green');


// 9.

let myTasks = document.querySelector('.task');

function addTaskSelected() {

  if (myTasks.className === 'task') {
    myTasks.classList = 'task-selected';
  } else {
    myTasks.classList = 'task';
  }

}

myTasks.addEventListener('click', addTaskSelected)


// 10.

function monthDayColor(event) {

  let currentClass = document.querySelector('.my-tasks').lastElementChild.classList[0];

  if (currentClass === 'task-selected') {
    event.target.style.color = 'green';
  } else {
    event.target.style.color = 'rgb(119,119,119)';
  }

};

let daysContainer = document.querySelector('.days-container');
daysContainer.addEventListener('click', monthDayColor);

// BONUS:

function addTask(string) {
  let taskImput = document.querySelector('#task-input');
  string = taskImput.value

  let createParagraph = document.createElement('div');
  createParagraph.innerText = string

  let myTasks = document.querySelector('.input-container');

  myTasks.appendChild(createParagraph);
}

let btnButton = document.querySelector('#btn-add');
btnButton.addEventListener('click', addTask);
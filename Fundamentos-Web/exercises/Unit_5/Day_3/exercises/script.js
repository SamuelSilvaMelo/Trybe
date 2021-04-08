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


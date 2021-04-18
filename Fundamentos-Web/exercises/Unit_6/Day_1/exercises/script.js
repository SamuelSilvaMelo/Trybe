const select = document.querySelector('#states');

const statesNames = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const statesInitials = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const startDate = document.querySelector('#start-date');

const bodyNode = document.querySelector('body');

const sendButton = document.querySelector('#send-button');

const resetButton = document.querySelector('#reset-button');

function createStates() {
  for (let index = 0; index < statesNames.length; index += 1) {
    const option = document.createElement('option')
    option.value = statesInitials[index];
    option.innerText = statesNames[index];

    select.appendChild(option);
  }
}

createStates()

//

function checkStartDate() {
  let dateValue = startDate.value

  if (dateValue[2] !== '/' || dateValue[5] !== '/') {
    alert('Verifique o formato da data');
  }

  let dateInfos = dateValue.split('/');

  let dateDay;
  let dateMonth;
  let dateYear;
  
  for (let index = 0; index < dateInfos.length; index += 1) {
    dateInfos2 = parseFloat(dateInfos[index]);
    dateInfos2 = dateInfos[index];

    if (index === 0){
      dateDay = dateInfos[index];
    } else if (index === 1){
      dateMonth = dateInfos[index];
    } else {
      dateYear = dateInfos[index];
    }
  }

  if (dateDay <= 0 || dateDay > 31) {
    alert('Verifique o dia inserido na data');
  } else if (dateMonth <= 0 || dateMonth > 12) {
    alert('Verifique o mês inserido na data');
  } else if (dateYear <= 0 || dateYear > 2021) {
    alert('Verifique o ano informado na data');
  }

}

startDate.addEventListener('change', checkStartDate);

// Exercise 3

function checkForm(event) {
  event.preventDefault();

  let labelDefinition = document.querySelectorAll('.label-definition');

  let formResumeFieldset = document.createElement('fieldset');
  formResumeFieldset.className = 'resume-fieldset';

  let title = document.createElement('h1');
  title.innerText = 'Resumo do Currículo';

  formResumeFieldset.appendChild(title);

  for (let index = 0; index < labelDefinition.length; index += 1) {

    let labelResumeDiv = document.createElement('div');
    labelResumeDiv.className = 'label-resume';

    let inputResumeDiv = document.createElement('div');
    inputResumeDiv.className = 'input-resume';

    formResumeFieldset.appendChild(labelResumeDiv);
    formResumeFieldset.appendChild(inputResumeDiv);

    let createLabelParagraph = document.createElement('p');

    createLabelParagraph.innerText = labelDefinition[index].innerText;

    labelResumeDiv.appendChild(createLabelParagraph);

    let createInputParagraph = document.createElement('p');

    createInputParagraph.innerText = labelDefinition[index].nextElementSibling.firstElementChild.value;

    inputResumeDiv.appendChild(createInputParagraph);

    bodyNode.appendChild(formResumeFieldset);
  }
}

sendButton.addEventListener('click', checkForm);

// Exercise 4

function clearForm() {
  bodyNode.removeChild(document.querySelector('.resume-fieldset'))
}

resetButton.addEventListener('click', clearForm);

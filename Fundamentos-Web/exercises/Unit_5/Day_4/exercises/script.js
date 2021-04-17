const personalizationButtons = document.querySelector('.personalization-buttons')
const bodyStyle = document.querySelector('body').style


function changeBackgroundColor(event) {
  if (event.target.id === 'background-white') {
    bodyStyle.backgroundColor = 'white';
  }else if (event.target.id === 'background-grey') {
    bodyStyle.backgroundColor = 'grey';
  }else if (event.target.id === 'background-dark-blue') {
    bodyStyle.backgroundColor = 'darkblue';
  }else if (event.target.id === 'background-pink') {
    bodyStyle.backgroundColor = 'pink';
  } else if (event.target.id === 'background-brown') {
    bodyStyle.backgroundColor = 'brown';
  }
  
}

personalizationButtons.addEventListener('click', changeBackgroundColor);

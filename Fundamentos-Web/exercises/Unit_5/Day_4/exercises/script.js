const personalizationButtons = document.querySelector('.personalization-buttons');
const bodyStyle = document.querySelector('body').style;
const textColor = document.querySelector('.text-color');
const paragraph = document.querySelectorAll('.paragraph');

// Function to change the site backgroun color
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

//function to change the text color
function changeTextColor(event) {

  for (let index = 0; index < paragraph.length; index += 1) {
    if (event.target.id === 'text-white') {
      paragraph[index].style.color = 'white';
    }else if (event.target.id === 'text-grey') {
      paragraph[index].style.color = 'grey';
    }else if (event.target.id === 'text-dark-blue') {
      paragraph[index].style.color = 'darkblue';
    }else if (event.target.id === 'text-pink') {
      paragraph[index].style.color = 'pink';
    } else if (event.target.id === 'text-brown') {
      paragraph[index].style.color = 'brown';
    }
  }
  
}

textColor.addEventListener('click', changeTextColor);

const personalizationButtons = document.querySelector('.personalization-buttons');
const mainStyle = document.querySelector('main').style;
const textColor = document.querySelector('.text-color');
const paragraph = document.querySelectorAll('.paragraph');
const fontSize = document.querySelector('.font-size');
const lineHeight = document.querySelector('.line-height');
const fontFamily = document.querySelector('.font-family');

// Function to change the site backgroun color
function changeBackgroundColor(event) {
  if (event.target.id === 'background-black') {
    mainStyle.backgroundColor = 'black';
  } else if (event.target.id === 'background-white') {
    mainStyle.backgroundColor = 'white';
  }else if (event.target.id === 'background-grey') {
    mainStyle.backgroundColor = 'grey';
  }else if (event.target.id === 'background-dark-blue') {
    mainStyle.backgroundColor = 'darkblue';
  }else if (event.target.id === 'background-pink') {
    mainStyle.backgroundColor = 'pink';
  } else if (event.target.id === 'background-brown') {
    mainStyle.backgroundColor = 'brown';
  }

  let backgroundValue = mainStyle.backgroundColor;
  localStorage.setItem('background', backgroundValue);
}

personalizationButtons.addEventListener('click', changeBackgroundColor);

//function to change the text color
function changeTextColor(event) {

  for (let index = 0; index < paragraph.length; index += 1) {
    if (event.target.id === 'text-black') {
      paragraph[index].style.color = 'black';
    } if (event.target.id === 'text-white') {
      paragraph[index].style.color = 'white';
    } else if (event.target.id === 'text-grey') {
      paragraph[index].style.color = 'grey';
    } else if (event.target.id === 'text-dark-blue') {
      paragraph[index].style.color = 'darkblue';
    } else if (event.target.id === 'text-pink') {
      paragraph[index].style.color = 'pink';
    } else if (event.target.id === 'text-brown') {
      paragraph[index].style.color = 'brown';
    }
  }

  let textColor = paragraph[0].style.color;
  localStorage.setItem('textColor', textColor);
}

textColor.addEventListener('click', changeTextColor);


//function to change the font size
function changeFontSize(event) {
  for (let index = 0; index < paragraph.length; index += 1){
    if (event.target.id === 'small-size-font') {
      paragraph[index].style.fontSize = 'small';
    } else if (event.target.id === 'medium-size-font') {
      paragraph[index].style.fontSize = 'medium';
    } else if (event.target.id === 'large-size-font') {
      paragraph[index].style.fontSize = 'large';
    }
  }

  let fontSize = paragraph[0].style.fontSize;
  localStorage.setItem('fontSize', fontSize);
}

fontSize.addEventListener('click', changeFontSize);

//function to change line height 
function changeLineHeight(event) {
  for (let index = 0; index < paragraph.length; index += 1) {
    if (event.target.id === 'small-line-height') {
      paragraph[index].style.lineHeight = '15px';
    } else if (event.target.id === 'medium-line-height') {
      paragraph[index].style.lineHeight = '25px';
    } else if (event.target.id === 'large-line-height') {
      paragraph[index].style.lineHeight = '35px';
    }
  }

  let lineHeight = paragraph[0].style.lineHeight;
  localStorage.setItem('lineHeight', lineHeight);
}

lineHeight.addEventListener('click', changeLineHeight);

//function to change font-family
function changeFontFamily(event) {
  for (let index = 0; index < paragraph.length; index += 1) {
    if (event.target.id === 'arial') {
      paragraph[index].style.fontFamily = 'Arial';
    } else if (event.target.id === 'times') {
      paragraph[index].style.fontFamily = 'Times New Roman';
    } else if (event.target.id === 'monoespace') {
      paragraph[index].style.fontFamily = 'monoespace';
    }
  }

  let fontFamily = paragraph[0].style.fontFamily;
  localStorage.setItem('fontFamily', fontFamily);
}

fontFamily.addEventListener('click', changeFontFamily);

//Add search information saved in localStorage

window.onload = function requestLocalStorageInfos() {
  mainStyle.backgroundColor = localStorage.getItem('background');

  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.color = localStorage.getItem('textColor');
    paragraph[index].style.fontSize = localStorage.getItem('fontSize');
    paragraph[index].style.lineHeight = localStorage.getItem('lineHeight');
    paragraph[index].style.fontFamily = localStorage.getItem('fontFamily');
  }
}

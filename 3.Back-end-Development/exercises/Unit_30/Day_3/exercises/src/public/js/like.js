const socket = window.io();

const likeBtn = document.getElementById('likeIcon');
const startBtn = document.getElementById('starIcon');

likeBtn.addEventListener('click', () => {
  socket.emit('likePost', `${socket.id} clicou no like`);
});

startBtn.addEventListener('click', () => {
  const currentStars = document.getElementById('currentStars');
  const updatedStars = parseInt(currentStars.innerText) + 1;

  currentStars.innerText = updatedStars;

  socket.emit('starPost', updatedStars);
});

socket.on('updateLikes', (likes) => {
  const currentLikes = document.getElementById('currentLikes');
  currentLikes.innerText = likes
});

socket.on('updateStars', (star) => {
  const currentStars = document.getElementById('currentStars');
  currentStars.innerText = star; 
});

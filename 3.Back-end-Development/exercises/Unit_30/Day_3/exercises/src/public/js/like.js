const socket = window.io();

const likeBtn = document.getElementById('likeIcon');

likeBtn.addEventListener('click', () => {
  socket.emit('likePost', `${socket.id} clicou no like`);
});

socket.on('updateLikes', (likes) => {
  const currentLikes = document.getElementById('currentLikes');
  currentLikes.innerText = likes
});

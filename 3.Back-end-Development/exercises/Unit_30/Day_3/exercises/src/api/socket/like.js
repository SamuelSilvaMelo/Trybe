let likes = 0;
let stars = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('likePost', () => {
      likes += 1;

      io.emit('updateLikes', likes);
    });

    socket.on('starPost', (updatedStars) => {
      stars = updatedStars;
      
      socket.broadcast.emit('updateStars', stars);
    });
  });
};

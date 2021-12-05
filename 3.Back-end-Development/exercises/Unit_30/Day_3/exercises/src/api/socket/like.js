module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('likePost', (like) => {
      console.log(like);
    });
  });
};

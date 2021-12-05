/*
  A função io.on() vai ser executada sempre que um novo client se conectar ao servidor. A callback da função recebe o socket que representa uma conexão abera ao socket.io rodando no nosso backend. No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão.
*/

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};

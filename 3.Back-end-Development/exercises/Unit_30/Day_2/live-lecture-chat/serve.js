const { Socket } = require('dgram');
const net = require('net');

const PORT = 2708;

let sockets = [];
let guestId = 0;

function broadcast(from, message) {
  sockets.forEach((socket) => {
    if (socket.name !== from.name) {
      socket.write(`${from.name} >> ${message}`);
    };
  });
};

const server = net.createServer((socket) => {
  guestId += 1; 
  socket.name = `Guest ${guestId}`
  sockets.push(socket);

  socket.on('end', () => {
    sockets = sockets.filter(({ name }) => name !== socket.name);
    console.log('Cliente desconectado');
  });

  socket.on('error', (error) => {
    console.log(error);
  });

  socket.on('data', (message) => {
    broadcast(socket, message.toString());
  });

  socket.write('Bem vindo ao chat \n');
  console.log(sockets.map((e) => e.name))
});

server.listen(PORT, () => console.log(`Servidor está on na porta ${PORT}`));

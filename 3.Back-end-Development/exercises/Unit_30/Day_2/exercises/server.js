require('dotenv').config();
const net = require('net');

const PORT = process.env.PORT || 3001;

const server = net.createServer((socket) => {
  socket.write('Bem vindo ao servidor! \n');

  socket.on('data', (message) => console.log(message.toString()));
  
  server.getConnections((_error, count) => 
    socket.write(`O servidor tem ${count} clientes conectados.`)
  );
});

server.listen(PORT, () =>
  console.log(`Server running on PORT: ${PORT}`)
);

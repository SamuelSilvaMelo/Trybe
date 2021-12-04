const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost');

client.on('data', (message) => {
  console.log(message.toString());
});

client.write('Estou conectando!');

const net = require('net');
// o process.openStdin permite que voce escreva e capture o texto em um terminal.
const stdin = process.openStdin();

const client = new net.Socket();

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => {
    // precisamos transformar o texto para string (toString) e remover os espacos (trim)
    const message = text.toString().trim();
  
    client.write(message);
  })
});

client.on('data', (message) => {
  console.log(message.toString());
})

client.on('end', () => {
  console.log('Servidor desconectado');
});

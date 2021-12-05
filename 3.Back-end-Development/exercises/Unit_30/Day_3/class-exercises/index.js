const express = require('express');
const app = express();
const http = require('http').createServer(app);

const options = {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
};

/*
  Começamos implementando a instância do socket.io, usando a função io e passando dois parâmetros:
    -> O objeto http que é um servidor HTTP;
    -> Um objeto options para definir a regra de CORS que vamos aceitar do cliente que passa pela URL http://localhost:3000 usando os vergos GET e POST.
*/

const io = require('socket.io')(http, options);

/*
  A função io.on() vai ser executada sempre que um novo client se conectar ao servidor. A callback da função recebe o socket que representa uma conexão abera ao socket.io rodando no nosso backend. No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão.
*/

io.on('connection', (socket) => {
  // console.log(`Usuário conectado. ID: ${socket.id}`);

  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping!`);
    io.emit('pong', `${socket.id} enviou um pong!`) // essa linha envia um aviso para o cliente que o ping chegou.
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});

const express = require('express');
const app = express();
const http = require('http').createServer(app);

const options = {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
};

app.use(express.static(__dirname + '/public'));

/*
  Começamos implementando a instância do socket.io, usando a função io e passando dois parâmetros:
    -> O objeto http que é um servidor HTTP;
    -> Um objeto options para definir a regra de CORS que vamos aceitar do cliente que passa pela URL http://localhost:3000 usando os vergos GET e POST.
*/

const io = require('socket.io')(http, options);

require('./sockets/ping')(io);
require('./sockets/chat')(io);
require('./sockets/rooms')(io);

app.get('/ping', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', (_req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});

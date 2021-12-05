require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;
const options = {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
};

app.use(express.static(__dirname + '/../public'));

const io = require('socket.io')(http, options);

app.get(
  '/',
  (_req, res) => res.sendFile(__dirname + '/../public/')
);

app.listen(3000, () => console.log(`Running on PORT: ${PORT}`));

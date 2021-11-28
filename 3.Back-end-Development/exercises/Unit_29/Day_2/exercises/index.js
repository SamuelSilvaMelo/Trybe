require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listen on Port: ${PORT}`));

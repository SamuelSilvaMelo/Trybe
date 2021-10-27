require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Made with the help of the template */
app.use(express.static(`${__dirname}/uploads`));

app.get('/ping', controllers.ping);

app.post('/upload', middlewares.uploadFile.single('file'), controllers.upload);

app.post('/multiple', middlewares.uploadFiles.array('files'), controllers.multipleUpload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

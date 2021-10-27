require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads/'),
  filename: (_req, file, callback) => callback(null, file.originalname),
});

/*
  How to validate by extension?
  https://github.com/expressjs/multer/issues/114
*/

const upload = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    if (!file.originalname.includes('.png')) {
      const error = {
        statusCode: 403,
        message: 'Extension must be `png`'
      };

      return callback(error);
    }

    const files = fs.readdirSync(`${__dirname}/uploads`);

    if (files.some((dirFiles) => dirFiles === file.originalname)) {
      const error = {
        statusCode: 409,
        message: 'File already exists'
      };

      return callback(error);
    }

    callback(null, true);
  }
});

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

app.post('/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

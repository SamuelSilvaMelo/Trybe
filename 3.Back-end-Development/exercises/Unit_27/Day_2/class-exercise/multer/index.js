const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads/'),
  filename: (_req, file, callback) => callback(null, Date.now() + '-' + file.originalname)
})

const upload = multer({ storage });

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/upload', upload.single('arquivo'), (req, res) => {
  res.send('Ok');
});

const PORT = 3000;
app.listen(PORT, () => console.log('Rodando liso o servidor...'));

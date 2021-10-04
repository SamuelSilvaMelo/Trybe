const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  console.log(req.body.name)
  res.status(200).json({ greeting: `Hello, ${req.body.name}` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000') });

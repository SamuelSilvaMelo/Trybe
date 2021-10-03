const fs = require('fs/promises');
const express = require('express');
const generateToken = require('./token/randomToken');

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  res.status(200).json({ "message": 'pong' })
});

app.post('/hello', (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  const { name } = req.body;

  if (!name) return res.status(400).json({ "message": "Name is not defined" })

  res.status(200).json({ "message": `Hello, ${name}!` })
});

app.post('/greetings', (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  const { name, age } = req.body;

  if (!name || !age || typeof age !== 'number') return res.status(400).json({ "message": "Name and Age are required"});
  if (age < 0) return res.status(401).json({ "message": "You have not been born yet" });
  if (age <= 17) return res.status(401).json({ "message": "Unauthorized" });

  res.status(200).json({ "message": `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  const { name, age } = req.params;

  if (parseInt(age) < 0) return res.status(401).json({ "message": "You have not been born yet" });

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  fs.readFile('./simpsons/simpsons.json', 'utf-8')
    .then((response) => JSON.parse(response))
    .then((success) => res.status(200).json(success))
    .catch((error) => res.status(500).json({ "message": '500 (Internal Server Error)', "erro": error.message }))
});

app.get('/simpsons/:id', async (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  const { id } = req.params;

  try {
    const simpsons = await fs.readFile('./simpsons/simpsons.json', 'utf-8');
    const simpsonsParsed = JSON.parse(simpsons);
    const filteredSimpsons = simpsonsParsed.find((character) => character.id === id)

    if (!filteredSimpsons) return res.status(404).json({ "message": 'Simpson not found' })

    res.status(200).json(filteredSimpsons);

  } catch(error) {
    return res.status(500).json({ "message": '500 (Internal Server Error)', "error": error.message })
  }
});

app.post('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  
  if(!token || token.length !== 16) return res.status(401).json({ "message": 'Token inválido!' });

  try {
    const { id, name } = req.body;
    const simpsons = await fs.readFile('./simpsons/simpsons.json', 'utf-8');
    const simpsonsParsed = JSON.parse(simpsons);
    const filteredSimpsons = simpsonsParsed.find((character) => parseInt(character.id) === parseInt(id));
    console.log(filteredSimpsons)

    if (filteredSimpsons) return res.status(404).json({ "message": 'id already exists' });

    const newSimpsons = [...simpsonsParsed, { id, name }];
    const newSimposonsStringify = JSON.stringify(newSimpsons);

    await fs.writeFile('./simpsons/simpsons.json', newSimposonsStringify);
    
    res.status(204).end();

  } catch (error) {
    return res.status(500).json({ "message": "500 (Internal Server Error)", "error": error.message})
  }
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if([email, password, firstName, phone].some((field) => !field)) {
    return res.status(401).json({ "message": 'missing fields' });
  }

  const token = generateToken();

  res.status(200).json({ "token": `${token}` })
})

app.listen(3001, () => {
  console.log('Aplicaçao ouvindo na porta 3001')
});

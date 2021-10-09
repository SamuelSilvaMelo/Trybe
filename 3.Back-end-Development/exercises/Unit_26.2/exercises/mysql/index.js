const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

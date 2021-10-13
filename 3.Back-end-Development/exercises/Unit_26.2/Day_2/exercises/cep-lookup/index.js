require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middlewares/error');
const pingRoutes = require('./routes/pingRoutes');
const cepRoutes = require('./routes/cepRoutes');
const app = express();

app.use(express.json());
app.use('/ping', pingRoutes);
app.use('/cep', cepRoutes);
app.use('*', (_req, res) => {
  res.status(404).json({ message: 'Route not found.'})
});
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}`)
});

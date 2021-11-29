require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const PatientsRoutes = require('./routes/patientsRoutes');
const PlansRoutes = require('./routes/plansRoutes');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use('/patients', PatientsRoutes)
app.use('/plans', PlansRoutes)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});

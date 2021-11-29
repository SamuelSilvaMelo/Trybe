const express = require('express');
const PatientsController = require('../controllers/patientsControllers');
const route = express.Router();

route.post(
  '/newPatient',
  PatientsController.createNewPatient
)

route.get(
  '/all',
  PatientsController.listAllPatients
);

route.get(
  '/surgeries/all',
  PatientsController.listAllSurgeries
);

route.get(
  '/surgeries/without-doctor',
  PatientsController.listAllSurgeriesWithoutDoctor
)

module.exports = route;

const express = require('express');
const PlansController = require('../controllers/plansController');

const route = express.Router();

route.get(
  '/:id/all',
  PlansController.listAllPacientsByPlanId
)

module.exports = route;

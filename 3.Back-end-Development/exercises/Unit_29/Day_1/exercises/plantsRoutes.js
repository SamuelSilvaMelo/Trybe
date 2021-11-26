const express = require('express');

const PlantsServices = require('./plants');

const routes = express.Router();

routes.get(
  '/', (_req, res) => {
    const plants = PlantsServices.getPlants();

    res.status(200).json(plants);
  },
);

routes.get(
  '/:id', (req, res) => {
    const { id } = req.params;

    const plants = PlantsServices.getPlantById(id);

    if (plants.length === 0) return res.status(404).json({ message: 'Plant not found' });

    res.status(200).json(plants);
  },
);

routes.delete(
  '/:id', (req, res) => {
    const { id } = req.params;

    const plants = PlantsServices.getPlantById(id);

    if (plants.length === 0) return res.status(404).json({ message: 'Plant not found' });

    const newPlants = PlantsServices.removePlantById(id);
    
    res.status(200).json(newPlants);
  },
);

routes.post(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { newPlant } = req.body;

    const updatedPlant = PlantsServices.editPlant(id, newPlant);

    res.status(200).json(updatedPlant);
  },
);

routes.post(
  '/',
  (req, res) => {
    const { newPlant } = req.body;

    const createdPlant = PlantsServices.createNewPlant(newPlant);

    res.status(201).json(createdPlant);
  },
);

module.exports = routes;

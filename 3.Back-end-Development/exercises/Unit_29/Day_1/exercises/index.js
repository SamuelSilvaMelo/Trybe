const express = require('express');

const PlantsServices = require('./plants');

const plantsRoutes = require('./plantsRoutes');

const app = express();

app.use(express.json());

app.use(
  '/plants',
  plantsRoutes,
);

app.use(
  '/plants',
  plantsRoutes,
);

app.use(
  '/plants',
  plantsRoutes,
);

app.use(
  '/plants',
  plantsRoutes,
);

app.use(
  '/plants',
  plantsRoutes,
);

app.get(
  '/sunny/:id',
  (req, res) => {
    const { id } = req.params;

    const plant = PlantsServices.getPlantsThatNeedsSunWithId(id);

    res.status(200).json(plant);
  },
);

const PORT = 3000;

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));

let defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: true,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
];

const generateWaterFrequency = ({ needsSun, size, origin }) => (
  needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7)
);

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = generateWaterFrequency({ needsSun, size, origin });
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => defaultPlants;

const getPlantById = (id) => defaultPlants.filter((plant) => plant.id === Number(id));

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== Number(id));
  defaultPlants = newPlants;
  return newPlants;
};

const checkPlantNeedSum = (plant, waterFrequency) => (
  plant.needsSun && plant.specialCare.waterFrequency > waterFrequency
);

const getPlantsThatNeedsSunWithId = (id) => (
  defaultPlants.filter((plant) => (
    plant.id === id && checkPlantNeedSum(plant, 2)
  ))
);

const editPlant = (plantId, newPlant) => {
  const updatedPlants = defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
  defaultPlants = updatedPlants;
  return updatedPlants;
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  return defaultPlants;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
};

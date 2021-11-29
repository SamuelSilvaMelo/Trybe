const { Patients, Plans, Surgeries } = require('../models')

const listAllPatients = async (_req, res) => {
  try {
    const allPatients = await Patients.findAll(
      { include: { model: Plans, as: 'plan' } },
    );
  
    if (allPatients.length === 0) return res.status(404).json({ message: 'No patients found' });
  
    res.status(200).json(allPatients);
  } catch (e) {
    res.status(500).json({ message: 'Something\'s wrong here' });
  };
};

const listAllSurgeries = async (_req, res) => {
  try {
    const allSurgeries = await Patients.findAll(
      { include: [{ model: Surgeries, as: 'surgeries', through: { attributes: [] } }]},
    );
  
    if (allSurgeries.length === 0) return res.status(404).json({ message: 'No patients found' });

    res.status(200).json(allSurgeries);
  } catch (error) {
    res.status(500).json({ message: 'Something\'s wrong here' });
  };
};

const listAllSurgeriesWithoutDoctor = async (_req, res) => {
  try {
    const allSurgeries = await Patients.findAll(
      {
        include: [{
          model: Surgeries,
          as: 'surgeries',
          attributes: { exclude: ['doctor'] },
          through: { attributes: [] },
        }]
      },
    );
  
    res.status(200).json(allSurgeries);
  } catch (e) {
    res.status(500).json({ message: 'Something\'s wrong here' });
  };
};

const createNewPatient = async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;
  
    const findPlan = await Plans.findByPk(plan_id)
  
    if (!findPlan) res.status(404).json({ message: 'Plan not found' });
  
    const newUser = await Patients.create({ fullname, plan_id });
  
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ message: 'Something\'s wrong here' });
  };
};

module.exports = {
  listAllPatients,
  listAllSurgeries,
  listAllSurgeriesWithoutDoctor,
  createNewPatient,
};

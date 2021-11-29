const { Plans, Patients } = require('../models')

const listAllPacientsByPlanId = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await Plans.findByPk(id, {
      include: { model: Patients, as: 'patients' }
    });

    if (!plan) res.status(404).json({ message: 'Plan not found' });
  
    if (plan.patients.length === 0) res.status(200).json({ message: 'Plan does not have registered users' });

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Something\'s wrong here' })
  }
};

module.exports = {
  listAllPacientsByPlanId,
};

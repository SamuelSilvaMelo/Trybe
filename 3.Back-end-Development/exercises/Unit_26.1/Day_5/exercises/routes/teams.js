const express = require('express');
const fs = require('fs').promises;
const validateName = require('../middlewares/validateName');
const validateInitials = require('../middlewares/validateInitials');
const validateCountry = require('../middlewares/validateCountry');

const router = express.Router();

router.post(
  '/',
  validateName,
  validateInitials,
  validateCountry,
  async (req, res) => {
    try {
      const { name, initials, country, league } = req.body;
      const currentTeams = await fs.readFile('./data/teams.json', 'utf-8');
      const currentTeamsParsed = JSON.parse(currentTeams);
      const newTeam = [...currentTeamsParsed, { name, initials, country, league }];
  
      await fs.writeFile('./data/teams.json', JSON.stringify(newTeam));
  
      res.status(201).send({ name, initials, country, league });

    } catch (error) {
      res.status(401).json(
        {
          error: `${error.code}`,
          message: `${error.message}`,
        }
      );
    };
  }
);

router.get('/', async (_req, res) => {
  try {
    const currentTeams = await fs.readFile('./data/teams.json', 'utf-8');
    const currentTeamsParsed = JSON.parse(currentTeams);

    if(currentTeamsParsed.length === 0) {
      return res.status(200).json({ "teams": [] });
    };

    res.status(200).json(currentTeamsParsed)

  } catch (error) {
    res.status(401).json(
      {
        error: `${error.code}`,
        message: `${error.message}`
      }
    );
  };
})

module.exports = router;

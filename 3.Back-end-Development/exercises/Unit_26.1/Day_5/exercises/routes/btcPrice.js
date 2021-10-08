const express = require('express');
const validateToken = require('../middlewares/validateToken');
const axios = require('axios');

const router = express.Router();

router.get(
  '/price',
  validateToken,
  async (_req, res) => {
    const request = await axios('https://api.coindesk.com/v1/bpi/currentprice/BTC.json);')

    return res.status(200).json(request.data)
  }
)

module.exports = router;

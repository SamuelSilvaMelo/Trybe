const crypto = require('crypto');

function generateRandomToken() {
  return crypto.randomBytes(6).toString('hex');
}

module.exports = generateRandomToken;

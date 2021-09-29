const fs = require('fs');

function writeFile(fileName, content) {
  try {
    fs.writeFileSync(`./${fileName}`, content);
    return 'ok';
  } catch {
    return 'Error';
  }
};

module.exports = writeFile;

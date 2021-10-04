/* ⚠️ Attention ⚠️: We should never read a file from the file system in this way. Concatenating parameters received from the user directly in the call to any method represents a gigantic security flaw. Let's do it here for didactic purposes. Repeat: do not try this at home in production! */

const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code ==- 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});

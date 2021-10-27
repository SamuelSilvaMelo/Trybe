const multer = require('multer');
const fs = require('fs');

const singleFileStorage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads/'),
  filename: (_req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const multiFilesStorage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads/'),
});

/*
  How to validate by extension?
  https://github.com/expressjs/multer/issues/114
*/

const uploadFile = multer({
  storage: singleFileStorage,
  fileFilter: (_req, file, callback) => {
    if (!file.originalname.includes('.png')) {
      const error = {
        statusCode: 403,
        message: 'Extension must be `png`',
      };

      return callback(error);
    }

    const files = fs.readdirSync(`${__dirname}/../uploads`);

    if (files.some((dirFiles) => dirFiles === file.originalname)) {
      const error = {
        statusCode: 409,
        message: 'File already exists',
      };

      return callback(error);
    }

    callback(null, true);
  },
});

const uploadFiles = multer({
  storage: multiFilesStorage,
});

const uploadProfilePicture = multer({ dest: 'uploads/profilePics' });

module.exports = {
  uploadFile,
  uploadFiles,
  uploadProfilePicture,
};

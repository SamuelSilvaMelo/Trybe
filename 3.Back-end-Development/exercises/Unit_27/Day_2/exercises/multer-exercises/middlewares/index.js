const error = require('./error');
const validateProfile = require('./validateProfile');
const { uploadFile, uploadFiles, uploadProfilePicture } = require('./uploadFile');

module.exports = {
  error,
  uploadFile,
  uploadFiles,
  uploadProfilePicture,
  validateProfile,
};

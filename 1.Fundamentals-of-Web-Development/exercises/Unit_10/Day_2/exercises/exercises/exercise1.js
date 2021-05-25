const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

uppercase('teste Essa sTring', console.log)

module.exports = uppercase;

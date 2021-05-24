function changeToUpperCase(string) {
  return string.toUpperCase();
};

function getFirstLetter(string) {
  return string[0]
};

function concatStrings(stringA, stringB) {
  return `${stringA} ${stringB}`
};

module.exports = { changeToUpperCase, getFirstLetter, concatStrings }
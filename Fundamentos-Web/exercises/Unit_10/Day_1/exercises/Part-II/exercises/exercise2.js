function techList(array, name) {
  if (array.length === 0) return 'Vazio!'

  return array.sort()
  .map((techs) => ({tech: techs, name: name}))
}

module.exports = techList;
function hydrate(string) {
  const amountOfDrink = string.split('').filter(n => (Number(n)));
  const cupOfWater = amountOfDrink.reduce(((acc, curr) => acc += parseInt(curr)), 0);
  return (cupOfWater === 1) ? `${cupOfWater} copo de água` : `${cupOfWater} copos de água`
}

module.exports = hydrate;
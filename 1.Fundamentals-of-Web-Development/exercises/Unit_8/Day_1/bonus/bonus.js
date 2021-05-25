const dragonDamage = () => Math.floor((Math.random() * (50 - 15 + 1) ) + 15);

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: dragonDamage(),
};

console.log(dragon);







const battleMembers = { mage, warrior, dragon };
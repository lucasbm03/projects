const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const check = species.find((element) => element.name === animal);
  return check.residents.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;

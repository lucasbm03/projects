const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, next) => {
      acc[next.name] = next.residents.length;
      return acc;
    }, {});
  }
  const { specie, sex } = animal;
  const findSpecie = species.find((element) => element.name === specie);
  if (sex) {
    return findSpecie.residents.filter((ele) => ele.sex === sex).length;
  }
  return findSpecie.residents.length;
}

module.exports = countAnimals;

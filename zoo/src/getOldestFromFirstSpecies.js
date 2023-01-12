const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const first = employees.find((ele) => ele.id === id).responsibleFor[0];
  const others = species.find((element) =>
    element.id === first).residents.reduce((acc, previous) => {
    if (acc.age > previous.age) {
      return acc;
    }
    return previous;
  });
  return Object.values(others);
}

module.exports = getOldestFromFirstSpecies;

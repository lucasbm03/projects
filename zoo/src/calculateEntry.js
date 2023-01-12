const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((ele) => ele.age < 18).length;
  const adult = entrants.filter((ele) => ele.age >= 18 && ele.age < 50).length;
  const senior = entrants.filter((ele) => ele.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPrice = {
    childPrice: countEntrants(entrants).child * 20.99,
    adultPrice: countEntrants(entrants).adult * 49.99,
    seniorPrice: countEntrants(entrants).senior * 24.99,
  };
  return totalPrice.childPrice + totalPrice.adultPrice + totalPrice.seniorPrice;
}

module.exports = { calculateEntry, countEntrants };

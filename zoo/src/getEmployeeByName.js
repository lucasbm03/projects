const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((element) =>
    element.firstName.includes(employeeName) || element.lastName.includes(employeeName));
}

module.exports = getEmployeeByName;

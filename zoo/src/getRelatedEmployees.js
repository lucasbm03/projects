const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const result = [];
    const verify = employees.filter((element) => element.managers.includes(managerId));
    for (let i = 0; i < verify.length; i += 1) {
      result.push(`${verify[i].firstName} ${verify[i].lastName}`);
    }
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

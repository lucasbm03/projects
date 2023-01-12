const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animal = data.species.map((especie) => especie.name);
const dias = Object.keys(data.hours);

function animals(param) {
  return species.find((especie) => especie.name === param).availability;
}

function diasDeFuncionamento(dia) {
  const agenda = {};
  if (dia === 'Monday') {
    agenda[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    agenda[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: species.filter((animais) => animais.availability.includes(dia))
        .map((animais) => animais.name),
    };
  }
  return agenda;
}

function diasDeFuncionamentoDaSemana() {
  const agenda = {};
  dias.forEach((dia) => {
    if (dia === 'Monday') {
      agenda[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      agenda[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: species.filter((animais) => animais.availability.includes(dia))
          .map((animais) => animais.name),
      };
    }
  });
  return agenda;
}
function getSchedule(scheduleTarget) {
  if (animal.includes(scheduleTarget)) {
    return animals(scheduleTarget);
  }
  if (dias.includes(scheduleTarget)) {
    return diasDeFuncionamento(scheduleTarget);
  }
  return diasDeFuncionamentoDaSemana();
}

module.exports = getSchedule;

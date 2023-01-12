const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
test('verifica, se caso não receba nenhum parâmetro,retorna um objeto com todas as horas', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});
test('verifica , se passados os argumentos retorna mensagem de zoo fechado', () => {
  expect(getOpeningHours('monday', '09:00-Am')).toEqual('The zoo is closed');
});
test('verifica , se passados os argumentos retorna mensagem de zoo fechado', () => {
  expect(getOpeningHours('wednesday', '09:00-Pm')).toEqual('The zoo is closed');
});
test('verifica , erro de digitação nas horas', () => {
  expect(() => getOpeningHours('saturday', 'C9:00-Am')).toThrowError(
    new Error('The hour should represent a number'),
  );
});
test('verifica , erro de digitação nos minutos', () => {
  expect(() => getOpeningHours('sunday', '09:z0-Am')).toThrowError(
    new Error('The minutes should represent a number'),
  );
});
test('verifica , erro de digitação \'AM\' or \'PM\'\'', () => {
  expect(() => getOpeningHours('sunday', '09:00-zm')).toThrowError(
    new Error('The abbreviation must be \'AM\' or \'PM\''),
  );
});
test('verifica , erro de digitação dos dias da semana', () => {
  expect(() => getOpeningHours('thu', '09:00-Am')).toThrowError(
    new Error('The day must be valid. Example: Monday'),
  );
});
test('verifica , erro de digitação das horas que devem ser \'The hour must be between 0 and 12\' ', () => {
  expect(() => getOpeningHours('monday', '13:00-Am')).toThrowError(
    new Error('The hour must be between 0 and 12'),
  );
});
test('verifica , erro de digitação dos minutos que devem ser \'The minutes must be between 0 and 59\' ', () => {
  expect(() => getOpeningHours('monday', '09:65-Am')).toThrowError(
    new Error('The minutes must be between 0 and 59'),
  );
});

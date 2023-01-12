// Desafio 11
function generatePhoneNumber(numbers) {
  let repeticao = 0;
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (i = 0; i < numbers.length; i += 1) {
    repeticao = 0;
    for (index = 0; index < numbers.length; index += 1) {
      if (numbers[i] === numbers[index]) {
        repeticao += 1;
      }
    }
    if (numbers[i] < 0 || numbers[i] > 9 || repeticao > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let abre = '(';
  let fecha = ')';
  return (
    abre +
    numbers[0] +
    numbers[1] +
    fecha +
    ' ' +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    '-' +
    numbers[7] +
    numbers[8] +
    numbers[9] +
    numbers[10]
  );
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(phrase) {
  let returnNumbers = /\d+/g;
  let result = phrase.match(returnNumbers);
  let water = 0;

  for (i = 0; i < result.length; i += 1) {
      water += Number(result[i]);
    }
    if(water === 1){
      return water + ' copo de água';
    }
    if(water > 1){
      return water + ' copos de água';
    }
  }


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

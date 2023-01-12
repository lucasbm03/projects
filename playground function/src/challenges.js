// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(nome) {
  return nome.split(' ');
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length - 1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  let repeticao = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numeros[i] % 5 === 0) {
      array.push('buzz');
    } else if (numeros[i] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let addNumber = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      addNumber += '1';
    } else if (string[index] === 'e') {
      addNumber += '2';
    } else if (string[index] === 'i') {
      addNumber += '3';
    } else if (string[index] === 'o') {
      addNumber += '4';
    } else if (string[index] === 'u') {
      addNumber += '5';
    } else {
      addNumber += string[index];
    }
  }
  return addNumber;
}

function decode(cod) {
  let addWord = '';
  for (index = 0; index < cod.length; index += 1) {
    if (cod[index] === '1') {
      addWord += 'a';
    } else if (cod[index] === '2') {
      addWord += 'e';
    } else if (cod[index] === '3') {
      addWord += 'i';
    } else if (cod[index] === '4') {
      addWord += 'o';
    } else if (cod[index] === '5') {
      addWord += 'u';
    } else {
      addWord += cod[index];
    }
  }
  return addWord;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!'
  }
  let lista = [];
  tech.sort();
  for (index = 0; index < tech.length; index += 1) {
    lista.push({
      tech: tech[index],
      name: name
    })
  }
  return lista;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

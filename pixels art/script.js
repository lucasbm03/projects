localSection = document.getElementById('pixel-board');
createDivSeparation = document.createElement('div');
createDivSeparation.className = 'row'
localSection.appendChild(createDivSeparation);

function createFor(index) {
  for (i = 0; i < 5; i += 1) {
    let localPixel = document.getElementsByClassName('row')[index];
    const createDivs = document.createElement('div');
    createDivs.className = 'pixel';
    localPixel.appendChild(createDivs);

  }
}
createFor(0);
localSection = document.getElementById('pixel-board');
createDivSeparation = document.createElement('div');
createDivSeparation.className = 'row'
localSection.appendChild(createDivSeparation);

createFor(1);

createDivSeparation = document.createElement('div');
createDivSeparation.className = 'row'
localSection.appendChild(createDivSeparation);

createFor(2);

createDivSeparation = document.createElement('div');
createDivSeparation.className = 'row'
localSection.appendChild(createDivSeparation);

createFor(3);

createDivSeparation = document.createElement('div');
createDivSeparation.className = 'row'
localSection.appendChild(createDivSeparation);

createFor(4);

let selected = 'cor-1';
let cor1 = document.getElementById('cor-1');
let cor2 = document.getElementById('cor-2');
let cor3 = document.getElementById('cor-3');
let cor4 = document.getElementById('cor-4');

window.onload = cor1.classList = 'color selected';

window.onload = cor1.addEventListener('click', function () {
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
  cor1.classList.add('selected');
  selected = 'cor-1';
});

window.onload = cor2.addEventListener('click', function () {
  cor1.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
  cor2.classList.add('selected');
  selected = 'cor-2';
});

window.onload = cor3.addEventListener('click', function () {
  cor2.classList.remove('selected');
  cor1.classList.remove('selected');
  cor4.classList.remove('selected');
  cor3.classList.add('selected');
  selected = 'cor-3';
});

window.onload = cor4.addEventListener('click', function () {
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor1.classList.remove('selected');
  cor4.classList.add('selected');
  selected = 'cor-4'
});

let localPixels = document.querySelector('#pixel-board');
localPixels.addEventListener('click', function (event) {
  event.target.className = 'pixel' + ' ' + selected;
})

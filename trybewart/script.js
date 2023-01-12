const buttonEntrar = document.getElementById('entrar-btn');
const email = document.getElementById('email-input');
const senha = document.getElementById('password-input');
function loginAlert() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', loginAlert);
// Disabilitar o submit até que o checkbox esteja marcado
// https://www.codegrepper.com/code-examples/javascript/disable+submit+button+until+checkbox+is+checked+javascript
// https://stackoverflow.com/questions/69391275/disable-button-if-one-of-the-checkboxes-are-not-checked
const buttonEnviar = document.getElementById('submit-btn');
const agreeCheckbox = document.getElementById('agreement');
function disableButton() {
  buttonEnviar.disabled = true;
}
window.onload = disableButton;
function enableButton(event) {
  if (event.target.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
  console.log(event.target);
}
agreeCheckbox.addEventListener('change', enableButton);

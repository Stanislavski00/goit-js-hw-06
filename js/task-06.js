const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const input = validationInput;
  const inputLength = input.value.length;
  const requiredLength = input.dataset.length;

  if (inputLength === Number(requiredLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
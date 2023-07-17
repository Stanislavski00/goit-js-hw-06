const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }
  const formData = {
    email: email,
    password: password
  };

  console.log(formData);
  form.reset();
}
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const matchMessage = document.getElementById('matchMessage');
const strengthMessage = document.getElementById('strengthMessage');

function checkMatch() {
  if (password.value === confirmPassword.value && password.value !== '') {
    matchMessage.textContent = 'Las contraseñas coinciden ';
    matchMessage.className = 'success';
  } else {
    matchMessage.textContent = 'Las contraseñas no coinciden ';
    matchMessage.className = 'error';
  }
}

function checkStrength(pwd) {
  const strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/;
  const mediumRegex = /(?=.*[a-zA-Z])(?=.*\d).{6,}/;

  if (strongRegex.test(pwd)) {
    strengthMessage.textContent = 'Seguridad: Fuerte ';
    strengthMessage.className = 'success';
  } else if (mediumRegex.test(pwd)) {
    strengthMessage.textContent = 'Seguridad: Media ';
    strengthMessage.className = 'error';
  } else {
    strengthMessage.textContent = 'Seguridad: Débil ';
    strengthMessage.className = 'error';
  }
}

password.addEventListener('input', () => {
  checkMatch();
  checkStrength(password.value);
});

confirmPassword.addEventListener('input', checkMatch);

document.getElementById('passwordForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Formulario validado correctamente!');
});

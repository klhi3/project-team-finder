const loginFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/login/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response) {
      document.location.replace('/');
      alert('Logged.');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
    .querySelector('#loginBtn')
    .addEventListener('submit', loginFormHandler);
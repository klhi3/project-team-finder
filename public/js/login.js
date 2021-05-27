const loginFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(name);
  console.log(password);

  if (name && password) {
    const response = await fetch('/api/login/login', {
      method: 'POST',
      body: JSON.stringify({ 
        username: name, 
        password: password 
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (response.status === 200) {
      document.location.replace('/');
      alert('Logged.');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
    .getElementById('loginBtn')
    .addEventListener('click', loginFormHandler);
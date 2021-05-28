const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const state = document.querySelector('#state-signup').value.trim();

  console.log(username);
  console.log(email);
  console.log(password);
  console.log(city);
  console.log(state);

  if (username && email && password && city && state) {
    const response = await fetch('/api/login/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, city, state }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
  
  
  
document
  .getElementById('signupBtn')
  .addEventListener('click', signupFormHandler, { passive: false });
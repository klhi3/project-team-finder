const logout = async () => {
  console.log('hello');
  const response = await fetch('/api/login/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 200) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
const loginMethod = localStorage.getItem('login-method');

if (loginMethod === 'username') {
  const name = document.getElementById('username');
  const loggedAccount = localStorage.getItem('current-user');
  name.innerHTML = loggedAccount;
} else if (loginMethod === 'email') {
  const name = document.getElementById('username');
  const dataEmail = JSON.parse(localStorage.getItem('email'));
  const dataUsername = JSON.parse(localStorage.getItem('username'));
  const loggedAccount = localStorage.getItem('current-user');
  const usernameIdx = dataEmail.findIndex(data => data === loggedAccount);
  name.innerHTML = dataUsername[usernameIdx];
}

const logoutBtn = document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('current-user');
  localStorage.removeItem('login-method');
  location.replace('login.html');
})
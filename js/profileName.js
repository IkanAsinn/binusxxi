const loginMethod = localStorage.getItem('login-method');
const name = document.getElementById('username');

if (loginMethod === 'username') {
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


const dropdownMenu = document.querySelector('.dropdown-menu');
if (name.innerHTML === 'Guest') {
  dropdownMenu.innerHTML = '<li><a class="dropdown-item" href="/binusxxi/login">Login</a></li>'
}
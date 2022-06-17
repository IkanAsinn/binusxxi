const dataEmail = JSON.parse(localStorage.getItem('email'));
const dataUsername = JSON.parse(localStorage.getItem('username'));
const dataPassword = JSON.parse(localStorage.getItem('password'));

const login = document.getElementById('login')
const usr_email = document.getElementById('usr-email');
const pass = document.getElementById('password');
const button = document.getElementById('button-signUp');
const errorMessage = document.getElementById('error');

let LoggedAccount;

login.addEventListener('submit', function(e){
    e.preventDefault()
    if(dataEmail.find(data => data === usr_email.value)){
        if(!dataPassword.find(data => data === pass.value)){
            errorMessage.innerHTML = 'Wrong Password';
        }
        else{
            const accIndex = dataEmail.findIndex(data => data === usr_email.value);
            if(dataPassword[accIndex] === pass.value){
                location.replace("/binusxxi");
                loggedAccount = dataEmail.find(data => data === usr_email.value);
                localStorage.setItem('current-user', loggedAccount);
                localStorage.setItem('login-method', 'email');
            }
        }
    }
    else if(dataUsername.find(data => data === usr_email.value)){
        if(!dataPassword.find(data => data === pass.value)){
            errorMessage.innerHTML = 'Wrong Password';
        }
        else{
            const accIndex = dataUsername.findIndex(data => data === usr_email.value);
            if(dataPassword[accIndex] === pass.value){
                location.replace("/binusxxi");
                loggedAccount = dataUsername.find(data => data === usr_email.value);
                localStorage.setItem('current-user', loggedAccount);
                localStorage.setItem('login-method', 'username');
            }
        }
    }
    else{
        errorMessage.innerHTML = 'Email or Username is not registered';
    }
})


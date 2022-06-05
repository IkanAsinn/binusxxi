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
    console.log('in');
    if(dataEmail.find(data => data === usr_email.value)){
        console.log('1');
        if(!dataPassword.find(data => data === pass.value)){
            errorMessage.innerHTML = 'Wrong Password';
        }
        else{
            if(dataPassword.findIndex(data => data === pass.value) === dataEmail.findIndex(data => data === usr_email.value)){
                location.replace("index.html");
                loggedAccount = dataEmail.find(data => data === usr_email.value);
                localStorage.setItem('current-user', loggedAccount);
                localStorage.setItem('login-method', 'email');
            }
        }
    }
    else if(dataUsername.find(data => data === usr_email.value)){
        console.log('2');
        if(!dataPassword.find(data => data === pass.value)){
            errorMessage.innerHTML = 'Wrong Password';
        }
        else{
            if(dataPassword.findIndex(data => data === pass.value) === dataUsername.findIndex(data => data === usr_email.value)){
                location.replace("index.html");
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


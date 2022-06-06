const signUp = document.getElementById('register');
let email = document.getElementById('email');
const username = document.getElementById('username');
const pass = document.getElementById('password');
const conPass = document.getElementById('confirmPassword');
const checkBox = document.querySelector('#flexCheckDefault');
const dataEmail = JSON.parse(localStorage.getItem('email'));
const errorMessage = document.getElementById('error');

let emailArray = localStorage.getItem('email')
? JSON.parse(localStorage.getItem('email'))
: []
let usernameArray = localStorage.getItem('username')
? JSON.parse(localStorage.getItem('username'))
: []
let passArray = localStorage.getItem('password')
? JSON.parse(localStorage.getItem('password'))
: []

signUp.addEventListener('submit', function(e){
    e.preventDefault();
    
    console.log('Email : ' + email.value);
    console.log('Username : ' + username.value);
    console.log('Password : ' + pass.value);
    console.log('Confirm Password : ' + conPass.value);

    if(localStorage.getItem('email')){
        if(dataEmail.find(data => data === email.value)){
            errorMessage.innerHTML = 'Email has already been used';
            return;
        }
    }

    if(!checkBox.checked){
        errorMessage.innerHTML = 'Check the term and condition';
        return;
    }
    
    if(pass.value !== conPass.value){
        errorMessage.innerHTML = 'Password is not same';
        return;
    }

    emailArray.push(email.value);
    usernameArray.push(username.value)
    passArray.push(pass.value);

    localStorage.setItem('email', JSON.stringify(emailArray));
    localStorage.setItem('username', JSON.stringify(usernameArray));
    localStorage.setItem('password', JSON.stringify(passArray));

    console.log(localStorage);

    location.replace("/binusxxi/login")
})
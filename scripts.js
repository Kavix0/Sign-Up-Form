const firstName = document.getElementById('first_name');
const firstNameError= document.querySelector('label[for=first_name] + span.error');

const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone_num');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm_password');

firstName.addEventListener('input', (e)=>{

    if(firstName.validity.valid) {
        firstNameError.textContent = "";
    }
    else{
        firstNameError.textContent = "REQUIRED"
    }
});
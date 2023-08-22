const firstName = document.getElementById('first_name');
const firstNameError = document.querySelector('label[for=first_name] + span.error');

const lastName = document.getElementById('last_name');
const lastNameError = document.querySelector('label[for=last_name] + span.error');

const email = document.getElementById('email');
const emailError = document.querySelector('label[for=email] + span.error');

const phoneNum = document.getElementById('phone_num');
const phoneError = document.querySelector('label[for=phone_num] + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('label[for=password] + span.error');

const confirmPass = document.getElementById('confirm_password');
const confirmPassError = document.querySelector('label[for=confirm_password] + span.error');


firstName.addEventListener('input', (e)=>{
    if(firstName.validity.valid) {
        firstNameError.textContent = "";
    }
    else{
        firstNameError.textContent = "REQUIRED";
    }
});

lastName.addEventListener('input', (e)=>{
    if(lastName.validity.valid) {
        lastNameError.textContent = "";
    }
    else{
        lastNameError.textContent = "REQUIRED";
    }
});
/*
email.addEventListener('input', (e)=>{
    if(email.validity.valid) {
        emailError.textContent = "";
    }else if(email.validity.typeMismatch) {
        emailError.textContent = "EX: abc@xyz.com";
    }
});
*/

/*
phone_num.addEventListener('input', (e)=>{
    if(phone_num.validity.valid) {
        phoneError.textContent = "";
    }else if(phone_num.validity.type)
    {

    }

});
*/
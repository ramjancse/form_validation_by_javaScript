const form = document.getElementById('form')
const username = document.getElementById('username')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2');

// // valid email address
function isvalidEamil(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Show message

function showSuccess(input, message){
    const formGroup = input.parentElement; 
    formGroup.className = "form-group success";
    const small = formGroup.querySelector('small');
    small.innerText = message;
    console.log(message)
}

function showError(input, message){
    const formGroup = input.parentElement; 
    formGroup.className = "form-group error";
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input); 
        }
    });
}
function getFieldName(input){
    return input.id.toUpperCase().charAt(0) + input.id.slice(1) ;
}

function checkLength(input, min, max){
   if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
   }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be Less than ${max}`);
   }else{
       showSuccess(input);
   }
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, fullname, email, password, password2  ]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 32); 
});


// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// //show input error
// function showError(input, message){
// const formGroup = input.parentElement;
// formGroup.className = 'form-group error';
// const small = formGroup.querySelector('small');
// small.innerText = message;
// }

// function showSuccess(input){
//     const formGroup = input.parentElement;
//     formGroup.className = 'form-group success';
// }
// // valid email
// // function isvalidEamil(email){
// //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// // }


// // function isvalidEamil(email){
// // //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// // //     return re.test(String(email).toLowerCase());

// function isvalidEamil(email){
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(re.test(input.value.trim())){
//             showSuccess(input);
//         }else{
//             showError(input, `email is not valid`); 
//         }
// }

// //check required field by an array
// function checRequired(inputArr){
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input, `${getFieldName(input)} is required`);
//         }else{
//             showSuccess(input);
//         }
//     });
// }

// //Field Name upper Case
// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
// }

// //Check Length
// function checkLength(input, min, max){
//     if(input.value.length < min){
//         showError(input, `${getFieldName(input)} must be at leats ${min} Characters`); 
//     }else if(input.value.length > max){
//         showError(input, `${getFieldName(input)} must be ${max} character`);
//     }else{
//         showSuccess(input); 
//     }
// }

// //event
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     checRequired([username, fullname, email, password, password2]);
//     checkLength(username, 3, 15);
//     checkLength(password, 6, 25);
//     checkEmail(email);

//     // if(username.value === ''){
//     //     showError(username, "User name is required");
//     // }else{
//     //     showSuccess(username);
//     // }
//     // if(fullname.value === ''){
//     //     showError(fullname, "Full name is required");
//     // }else{
//     //     showSuccess(fullname);
//     // }

//     // if(email.value === ''){
//     //     showError(email, "Emial is required");
//     // }else if(!isvalidEamil(email.value)){
//     //     showError(email, "Emial is not valid");
//     // }
    
//     // else{
//     //     showSuccess(email);
//     // }

//     // if(password.value === ''){
//     //     showError(password, "Password is required");
//     // }else{
//     //     showSuccess(password);
//     // }

//     // if(password2.value === ''){
//     //     showError(password2, "Confirm your password");
//     // }else{
//     //     showSuccess(password2);
//     // }
// });


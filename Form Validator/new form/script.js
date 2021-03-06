const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//*Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//*Check email is valid
//Function changed slightly
function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
    // console.log(input.value);
    //start with plain input

    if (input.value.trim() === ""){
      // console.log(input.id);

      // showError(input, `${input.id} is required`); // uncapitalized
      showError(input, `${getFieldName(input)} is required`);
    } else{
      showSuccess(input);
    }
  });

}

//Check input length
function checkLength(input, min, max){
  if (input.value.length < min){
    showError (input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError (input, `${getFieldName(input)} must be less than ${max} characters`);
  }else{
    showSuccess(input);
  }
}

//Get fieldName

function getFieldName(input){
  //return input.id.toUpperCase(); //Whole first word is uppercase
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//* Event listeners! start with these, put them down below
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // checkRequired(username) //*could do it this way, but it will require calling checkRequired() on every input. Better way is to use an array
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25); 


});

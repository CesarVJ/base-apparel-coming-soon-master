document.getElementById("validate").addEventListener("click",validateEmailAddress);
var messageError= document.getElementsByClassName("error-message")[0];
var errorIcon=document.getElementsByClassName("error-icon")[0];

function validateEmailAddress(e) {
  email = document.getElementsByClassName("email-address")[0];
  expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

console.log(email.value)
  if (!expression.test(email.value)) {
    e.preventDefault();
    messageError.style.visibility="visible"
    errorIcon.style.visibility="visible"
  }
}

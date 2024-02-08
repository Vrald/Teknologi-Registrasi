const ShowPassword = document.querySelector("#show-pass");
const PasswordField = document.querySelector("#pass");

ShowPassword.addEventListener("click", function(){
    this.classList.toggle("show");
    this.classList.toggle("hide-pass", !this.classList.contains("show"));
    const type = PasswordField.getAttribute("type") === "password" ? "text" : "password";
    PasswordField.setAttribute("type", type);
})

function validateEmail() {
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");
  
    if (valueEmail == "") {
      errorEmail.innerHTML = "Please enter your email";
      inputEmail.style.border = "3px solid red";
      return false;
    } else if (!valueEmail.includes("@") || !valueEmail.includes(".")) {
      errorEmail.innerHTML = "Please enter a valid email";
      inputEmail.style.border = "3px solid red";
      return false;
    } else {
      errorEmail.innerHTML = "";
      inputEmail.style.border = "3px solid #22539F";
      return true;
    }
  }
  
  function validatePass() {
    let inputPass = document.querySelector("#pass");
    let valuePass = inputPass.value;
    let errorPass = document.querySelector("#error-pass");
  
    if (valuePass == "") {
      errorPass.innerHTML = "Please enter your password";
      inputPass.style.border = "3px solid red";
      return false;
    } else {
      errorPass.innerHTML = "";
      inputPass.style.border = "3px solid #22539F";
      return true;
    }
  }
  
  let stepBtn = document.querySelector("#step-btn");
  stepBtn.addEventListener("click", function (e) {
    // e.preventDefault();
  
    let isEmailValid = validateEmail();
    let isPassValid = validatePass();
  
    if (
      isEmailValid &&
      isPassValid
    ) {

      window.location.href='Dashboard.html';
      
    }
  });
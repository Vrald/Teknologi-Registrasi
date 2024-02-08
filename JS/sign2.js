function validateName() {
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "Full name is required";
      inputName.style.border = "3px solid red";
      return false;
    } else {
      errorName.innerHTML = "";
      inputName.style.border = "3px solid #22539F";
      return true;
    }
  }
  
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

  function onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true
  }


  function validateWA() {
    let inputWA = document.querySelector("#wa");
    let valueWA = inputWA.value;
    let errorWA = document.querySelector("#error-wa");
  
    if (valueWA == "") {
      errorWA.innerHTML = "Please enter your whatsapp number";
      inputWA.style.border = "3px solid red";
      return false;
    } else if (!onlyDigits(valueWA) || valueWA.length !== 12) {
        errorWA.innerHTML = "Please enter a valid whatsapp number";
        inputWA.style.border = "3px solid red";
        return false;
    } else {
      errorWA.innerHTML = "";
      inputWA.style.border = "3px solid #22539F";
      return true;
    }
  }

  function validateBP() {
    let inputBP = document.querySelector("#bp");
    var BPS = document.forms.birth_place.value;
    let errorBP = document.querySelector("#error-bp");

    if(BPS == "0"){
        errorBP.innerHTML = "Birth Place is required";
        inputBP.style.border = "3px solid red";
        return false;
    } else {
      errorBP.innerHTML = "";
      inputBP.style.border = "3px solid #22539F";
      return true;
    }
  }

  function validateBD() {
    let inputBD1 = document.querySelector("#bd1");
    let inputBD2 = document.querySelector("#bd2");
    let inputBD3 = document.querySelector("#bd3");
    var BDS1 = document.forms.birth_month.value;
    var BDS2 = document.forms.birth_date.value;
    var BDS3 = document.forms.birth_year.value;
    let errorBD = document.querySelector("#error-bd");

    if(BDS1 == "0"){
      if(BDS2 == "0"){
        inputBD2.style.border = "3px solid red";
      } else {
        inputBD2.style.border = "3px solid #22539F";
      }
      if(BDS3 == "0"){
        inputBD3.style.border = "3px solid red";
      } else {
        inputBD3.style.border = "3px solid #22539F";
      }
        errorBD.innerHTML = "Birth date is required";
        inputBD1.style.border = "3px solid red";
        return false;
    } else if(BDS2 == "0"){
      if(BDS1 == "0"){
        inputBD1.style.border = "3px solid red";
      } else {
        inputBD1.style.border = "3px solid #22539F";
      }
      if(BDS3 == "0"){
        inputBD3.style.border = "3px solid red";
      } else {
        inputBD3.style.border = "3px solid #22539F";
      }
        errorBD.innerHTML = "Birth date is required";
        inputBD2.style.border = "3px solid red";
        return false;
    } else if(BDS3 == "0"){
      if(BDS2 == "0"){
        inputBD2.style.border = "3px solid red";
      } else {
        inputBD2.style.border = "3px solid #22539F";
      }
      if(BDS1 == "0"){
        inputBD1.style.border = "3px solid red";
      } else {
        inputBD1.style.border = "3px solid #22539F";
      }
        errorBD.innerHTML = "Birth date is required";
        inputBD3.style.border = "3px solid red";
        return false;
    } else {
      errorBD.innerHTML = "";
      inputBD1.style.border = "3px solid #22539F";
      inputBD2.style.border = "3px solid #22539F";
      inputBD3.style.border = "3px solid #22539F";
      return true;
    }
  }

  function validateLine() {
    let inputLine = document.querySelector("#line");
    let valueLine = inputLine.value;
    let errorLine = document.querySelector("#error-line");
  
    if (valueLine == "") {
      errorLine.innerHTML = "Line ID is required";
      inputLine.style.border = "3px solid red";
      return false;
    } else {
      errorLine.innerHTML = "";
      inputLine.style.border = "3px solid #22539F";
      return true;
    }
  }

  function validateGit() {
    let inputGit = document.querySelector("#git");
    let valueGit = inputGit.value;
    let errorGit = document.querySelector("#error-git");
  
    if (valueGit == "") {
      errorGit.innerHTML = "Git ID is required";
      inputGit.style.border = "3px solid red";
      return false;
    } else {
      errorGit.innerHTML = "";
      inputGit.style.border = "3px solid #22539F";
      return true;
    }
  }
  
  let stepBtn = document.querySelector("#step-btn");
  stepBtn.addEventListener("click", function (e) {
    // e.preventDefault();
  
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isWAValid = validateWA();
    let isBPValid = validateBP();
    let isBDValid = validateBD();
    let isLineValid = validateLine();
    let isGitValid = validateGit();
  
    if (
      isNameValid &&
      isEmailValid &&
      isWAValid &&
      isBPValid &&
      isLineValid &&
      isGitValid &&
      isBDValid
    ) {

      window.location.href='Upload.html';  

    }
  });
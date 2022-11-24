let passwordCheck = () => {

  const userPassword = document.getElementById("password").value;
  const userConfirmPassword = document.getElementById("confirm_password").value;

  if ( (userPassword.length === 0 || userConfirmPassword.length === 0 ) ) {
    console.log("IS EMPTY", userPassword, " / ", userConfirmPassword);
  }
  else {

    if (userPassword == userConfirmPassword) {
      console.log("VALID");
      return true;
    }
    else
      alert("Passwords does not much each other, please try again");

    console.log("\n\nNOT EMPTY", userPassword, " / ", userConfirmPassword);
  }

};

let validate = () => {

  validatePassword();

}


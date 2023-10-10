let userNameInput = document.querySelector(".userName");
let passwortInput = document.querySelector(".password");
let modal = document.querySelector(".modal");

function btnFunctionLogin() {
  let userNameValue = userNameInput.value;
  let passwortValue = passwortInput.value;

  if (userNameValue.length < 12 || passwortValue.length < 8) {
    modal.innerHTML = "Login unsuccessful";
    modal.style.display = "inline";
    modal.style.color='#9d0960';
  } else {
    modal.innerHTML = "Login successful";
    modal.style.display = "inline";
    modal.style.color='green';
  }

  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}

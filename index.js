const inputName = document.getElementById("name-input");
const inputPassword = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
var nameVar;
var passwordVar;
var userAccess;

document.addEventListener("DOMContentLoaded", function () {
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile === true) {
    window.location.href = "mobile.html";
  }
});

submitBtn.addEventListener("click", function () {
  nameVar = inputName.value;
  passwordVar = inputPassword.value;

  userAccess = nameVar + " " + passwordVar;
  fileName = "home.html";
  folderName = "home page";
  window.location.href = folderName + "/" + fileName;
});

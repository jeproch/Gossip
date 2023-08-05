const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  const inputName = document.getElementById("name-input");
  const inputPassword = document.getElementById("password-input");

  console.log(inputName.nodeValue + inputPassword.nodeValue);
  console.log("works");
});

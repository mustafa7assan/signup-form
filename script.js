const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const notMatchText = document.querySelector(".not-match");

passwordConfirm.addEventListener("input", () => {
  if (password.value === passwordConfirm.value) {
    notMatchText.style.visibility = "hidden";
    password.classList.remove("error");
    passwordConfirm.classList.remove("error");
  }
});

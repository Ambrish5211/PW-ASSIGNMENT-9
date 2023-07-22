const password = document.querySelector(".js-pass");
const conf_password = document.querySelector(".js-conf-pass");

const spaces = "  ";
password.selectionStart = spaces.length;

const text = document.querySelector(".answer");

function validate() {
  const pass = password.value;
  const conf = conf_password.value;
  if (pass === "" || conf === "") {
    text.innerHTML = `Entry Box can't be empty`;
  } else if (pass !== conf) {
    text.innerHTML = `Password don't match`;
  } else {
    text.innerHTML = "Password matched";
  }
}

const password = document.querySelector(".js-pass");
const email = document.querySelector(".js-email");

const text = document.querySelector(".answer");

function validate() {
  const pass = password.value;
  const e_mail = email.value;

  const emailArray = Array.from(e_mail);
  let flag = 0;
  emailArray.map((el) => {
    if (el === "@") {
      flag++;
    }
  });

  console.log(flag);

  if (pass === "" || email === "") {
    text.style.color = "red";
    text.innerHTML = `Entry Box can't be empty`;
  } else if (flag !== 1 || pass.length < 8) {
    text.style.color = "red";
    text.innerHTML = `Invalid Email or password`;
  } else {
    text.style.color = "green";
    text.innerHTML = `Valid email and passowrd`;
  }
}

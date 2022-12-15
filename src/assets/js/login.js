let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("Please enter full information");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("Logged in successfully");
    window.location.href = "/";
  } else {
    alert("Login failed");
  }
});
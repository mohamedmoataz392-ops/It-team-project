function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    window.location.href = "index.html";
  } else {
    document.getElementById("error-msg").textContent = "Wrong username or password!";
  }
}
let username = prompt("username");
let password = prompt("password");
if (username == "") {
  alert("username is required");
} else if (password == "") {
  alert("password is required");
} else if (username == "admin" && password == "1234") {
  alert("Hello" + username);
} else if (username == "john" && password == "qwerty") {
  alert("Hello" + username);
} else {
  alert("invalid username or password");
}

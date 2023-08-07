let user = prompt("Name", "guest");
if (user == "codecamp") {
  let password = prompt("password");
  if (password == "123456") {
    user = "codecamp";
  } else {
    alert("Wrong password");
  }
} else {
  user = "guest";
}
alert("Welcome " + user);

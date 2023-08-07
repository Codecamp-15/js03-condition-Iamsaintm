let score = prompt();
let message =
  score >= 80
    ? "A"
    : score > 69
    ? "B"
    : score > 59
    ? "C"
    : score > 49
    ? "D"
    : "F";
alert(message);

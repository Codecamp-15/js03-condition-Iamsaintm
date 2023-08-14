let score = prompt();
if (score >= 80) {
  alert("A");
} else if (70 <= score <= 79) {
  alert("B");
} else if (60 <= score <= 69) {
  alert("C");
} else if (50 <= score <= 59) {
  alert("D");
} else if (score < 50) {
  alert("F");
}

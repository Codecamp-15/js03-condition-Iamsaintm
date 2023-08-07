let num1 = prompt("number1");
let num2 = prompt("number2");
let num3 = prompt("number3");

if (num1 > num2) {
  if (num2 > num3) {
    alert(num1 + ", " + num2 + ", " + num3);
  } else if (num3 > num2) {
    if (num1 > num3) {
      alert(num1 + ", " + num3 + ", " + num2);
    } else if (num3 > num1) {
      alert(num3 + ", " + num1 + ", " + num2);
    }
  }
} else if (num2 > num1) {
  if (num1 > num3) {
    alert(num2 + ", " + num1 + ", " + num3);
  } else if (num3 > num1) {
    if (num2 > num3) {
      alert(num2 + ", " + num3 + ", " + num1);
    } else if (num3 > num2) {
      alert(num3 + ", " + num2 + ", " + num1);
    }
  }
}

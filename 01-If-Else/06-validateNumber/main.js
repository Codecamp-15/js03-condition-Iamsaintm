// let num1 = prompt("number1");
// if (num1 - 0) {
//   let num2 = prompt("number2");
//   if (num2 - 0) {
//     alert(+num1 + +num2);
//   } else {
//     alert("Invalid number");
//   }
// } else {
//   alert("Invalid number");
// }
// ทำไม่ได้ในกรณีที่เราใส่ 0

let num1 = prompt();
let num2 = prompt();
// Guard-Clause
if (num1 === null || num1.trim() === "" || isNaN(num1)) {
  alert("Invalid Number");
} else if (num2 === null || num2.trim() === "" || isNaN(num2)) {
  alert("Invalid Number");
} else {
  alert(+num1 + +num2);
}

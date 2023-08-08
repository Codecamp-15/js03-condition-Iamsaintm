let x = Number(prompt("number1"));
let y = Number(prompt("number2"));
let z = Number(prompt("number3"));

let max;
let mid;
let min;

if (x >= y && x >= z) {
  max = x;
  if (y >= z) {
    mid = y;
    min = z;
  } else {
    mid = z;
    min = y;
  }
}
if (y >= x && y >= z) {
  max = y;
  if (x >= z) {
    mid = x;
    min = z;
  } else {
    mid = z;
    min = x;
  }
}
if (z >= x && z >= y) {
  max = z;
  if (x >= y) {
    mid = x;
    min = y;
  } else {
    mid = y;
    min = x;
  }
}

console.log(`${max} : ${mid} : ${min}`);

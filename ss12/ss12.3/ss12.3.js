let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let c = Number(prompt("Nhập số c:"));

let max;

if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}

console.log("Số lớn nhất là: " + max);
let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));

if (a === 0) {
  if (b === 0) {
    console.log("Vô số nghiệm");
  } else {
    console.log("Vô nghiệm");
  }
} else {
  let x = -b / a;
  console.log("Nghiệm x = " + x);
}
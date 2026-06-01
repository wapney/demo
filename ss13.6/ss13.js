let numbers = [];
let length = Math.floor(Math.random() * 11) + 10; 


for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * 10)); // 0 - 9
}

let k = Number(prompt("Nhập số cần kiểm tra:"));

let count = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === k) {
        count++;
    }
}

console.log(numbers);
alert(k+count);
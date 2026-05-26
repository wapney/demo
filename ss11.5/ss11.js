
let weight = Number(prompt("Cân nặng(kg): "));
let height = Number(prompt("Chiều cao(m): "));

if (height >3){
    height =height/100;
}

let bmi = weight/(height**2);

if(bmi < 18.5){
    alert("Cân nặng thấp gầy");
}else if(bmi >=18.5 && bmi <=24.9 ){
    alert("Bình thường");
}else if(bmi >= 25 && bmi <= 29.9 ){
    alert("Thừa cân");
}else if(bmi >= 30 && bmi <= 34.9){
    alert("Tiền béo phì 1 ");
}else if(bmi >= 35 && bmi <= 39.9){
    alert("Béo phì độ 2");
}else if(bmi >= 40){
    alert("Béo phì độ 3");
}else{
    alert("........");
}
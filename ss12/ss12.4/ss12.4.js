let kt = Number(prompt("Điểm bài kiểm tra:"));
let gk = Number(prompt("Điểm giữa kỳ:"));
let ck = Number(prompt("Điểm cuối kỳ:"));

let avg = (kt+gk+ck)/3;


if(avg >=9 ){
    console.log("Xuất sẳc");
}else if(avg >=8 ) {
    console.log("Giỏi");
    
}else if(avg >=6.5){
    console.log("Khá");
}else if(avg >= 5){
    console.log("Trung bình");
}else{
    console.log("Yếu");
}
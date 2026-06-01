

let arr = [1,3,4,6,7,9];


let numb =Number(prompt("Chọn số ngẫu nhiên từ 1-10"));
let trueNumber =false;

for (let i=0;i<arr.length;i++){
    if(arr[i]===numb){
        trueNumber =true;
        break;

    }
}
if(trueNumber){
    alert("Bingo");
    
}else{
    alert("Chúc bạn may mắn lần sau");
    
}
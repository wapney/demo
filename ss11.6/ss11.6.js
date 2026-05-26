
let a = Number(prompt("Mời bạn nhập số a:"));
let b = Number(prompt("Mời bạn nhập số b: "));
let ab = prompt("Mời bạn nhập các phép tính (+,-,*,/)");



if(ab==="+"){
    alert("Kết quả của phép tính trên là: a+b  = " + (a+b));
}else if(ab==="-"){
    alert("Kết quả của phép tính trên là: a-b  = " + (a-b));
}else if(ab==="*"){
    alert("Kết quả của phép tính trên là: a*b  = " + (a*b));
}else if(ab==="/"){
    if(b ===0){
        alert("Không thể chia hết cho 0 ")
    }else{
        alert("Kết quả của phép tính trên là: a/b  = " + (a/b));
    }
    
}
else{
    alert("........");
}
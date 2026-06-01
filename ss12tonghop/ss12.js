
let name ="";
let age ="";


while(true){
    let meun = +prompt(
        "-----meun------\n" + 
        "1. Nhập tên người dùng\n" +
        "2. Nhập tuổi người dùng\n" +
        "3. In tên và tuổi\n" +
        "4. In bảng cửu chương\n" +
        "5. Kiểm tra số chẵn lẻ\n" +
        "6. Tính tổng từ 1 đến N\n" +
        "7. In các số trong dãy\n" +
        "8. Kiểm tra số nguyên tố\n" +
        "9. Đảo ngược chuỗi\n" +
        "10. Thoát\n" +
        "Nhập lựa chọn:"

    )
    switch(meun){
    case 1:
        name =(prompt("Tên:"));
        break;
    case 2 :
        age =Number(prompt("Tuổi"));
        break;
    case 3:
        alert(`Tên: ${name} Tuổi: ${age}`);
        break;
    case 4 :
        let n = +prompt("Nhập số cần in bảng cửu chương:");
        let result ="";
        for(let i=1;i<10;i++){
            result += n + " x " + i + " = " + (n * i) + "\n";

        }
        alert(result);
        break;
    case 5:
        let numberE = +prompt("Kiểm tra số chẵn lẻ");
        if(numberE % 2 ===0 ){
            alert("Số chẵn");
        }
        else{
            alert("Số lẻ");
        }
        break;
    case 6 :
        let numberN = +prompt("Số N :");
        let total = 0;
        for(i=1;i<=numberN;i++){
            total += i;

        }
        alert(`Tổng từ 1 đến ${numberN} là ${total}`);
        break;
    
    case 7 :
        let 
        break
    case 8 :
        let numberY = +prompt("Kiểm tra số nguyên tố");
        let numberPrime = true;
        if (numberY<2){
            console.log("Không phải số nguyên tố ");           
            

        }else{
            

            for(let i=2;i<=Math.sqrt(numberY);i++){
                if(numberY%i===0){
                    numberPrime =false;
                    break;
                }
            }

        }
        if(numberPrime){
            alert("Số nguyên tố");
        }else{
            alert("Không phải số nguyên");
        }
        break;
        
    case 9:
        let str =prompt("Nhập Chuỗi");
        let reversed = "";
        for(let i=str.length-1; i>=0;i-- ){
            reversed +=str[i];
        }
        alert(reversed);
        break;
    case 10:
        alert("thoát");
        break

    }
    
    
        
}






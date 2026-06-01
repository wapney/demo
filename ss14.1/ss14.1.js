


    let sinhVien = [];


    let name = prompt("Nhập tên sinh viên:");
    let age = Number(prompt("Nhập tuổi sinh viên:"));
    let id = prompt("Nhập ID sinh viên:");


    sinhVien.push([id,name,age]);
    alert("Thêm sinh viên");


    let result ="";

    if(sinhVien.length===0){
        console.log("Danh Sách rỗn");
        
    }else{
        for(let i=0;i<sinhVien.length;i++){
            result +=  "ID: " + sinhVien[i][0] +
                    ", Tên: " + sinhVien[i][1] +
                    ", Tuổi: " + sinhVien[i][2] + "\n";
        }
    }

    alert(result);


    let timKiemID = prompt("ID của sinh viên");

    let timKiem = false;

    for(let i =0;i<sinhVien.length;i++){
        if(sinhVien[i][0]===timKiemID){
            sinhVien.splice(i, 1);
            found = true;
            break;
        }
    }
    if (timKiem) {
        alert("Đã xóa sinh viên có ID: " + searchId);
    } else {
        alert("Không tìm thấy sinh viên!");
    }
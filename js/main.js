
//========================================BT1====================================
// hàm tính tổng 1 + 2 + ... + number
function TinhTong(number) {
    var tong = 0;
    for (var i = 0; i <= number; i++) {
        tong += i;
    }
    return tong;
}
// hàm xét số nguyên nhỏ nhất có tổng lớn hơn số nhập vào
function soNguyenDuongNhoNhat(number) {
    for (i = 0; TinhTong(i) < number; i++) {
        var ketQua = i;
    }
    // console.log(i)
    return i;
}
// hàm xử lý sự kiện tính
document.getElementById('btnTinh').onclick = function() {
    var soSoSanh = Number(document.getElementById('soSoSanh').value);
    var soCanTim = soNguyenDuongNhoNhat(soSoSanh);
    document.getElementById('tagTinh').innerHTML = i;
}


//========================================BT2====================================

document.getElementById('btnTong').onclick = function() {
    // InPut:
    var soX = Number(document.getElementById('soX').value);
    var soN = Number(document.getElementById('soN').value);
    // Output:
    var tong = 0;
    for (var i = 1; i <= soN; i++) {
        var s1 = 0;
        s1 = Math.pow( soX, i);
        tong += s1;
        console.log(s1, tong);
    } 
    document.getElementById('tagTong').innerHTML = tong;
}

//========================================BT3====================================

document.getElementById('btnTinhGiaiThua').onclick = function() {
    // Input:
    var soTinhGiaiThua = Number(document.getElementById('soTinhGiaiThua').value);
    // Output:
    var output = 1;

    //Progress: cách 1:

    // var dem = 1;
    // while(dem <= soTinhGiaiThua) {
    //     output = output * dem;
    //     dem++;
    // }
    // document.getElementById('tinhGiaiThua').innerHTML = output;

    //Progress: cách 2:

    for (var i = 1 ; i <= soTinhGiaiThua; i++) {
        output *=i;
    }
    document.getElementById('tinhGiaiThua').innerHTML = output;
}

//========================================BT4====================================

document.getElementById('btnTaoTheDiv').onclick = function() {
    var tagTaoTheDiv = document.getElementById('tagTaoTheDiv');
    var theDiv = '';
    for (var i = 1; i <= 10 ; i++) {
        theDiv = theDiv + '<div id="'+ i + '"></div>';
        tagTaoTheDiv.innerHTML = theDiv;       
    }
    for (var j = 1; j <= 10; j++) {
        if (j % 2 == 0) {
            document.getElementById(j).innerHTML = 'Thẻ div chẵn ' + j;
            document.getElementById(j).classList = 'py-2 my-2 bg-danger container';
        } else {
            document.getElementById(j).innerHTML = 'Thẻ div lẻ ' + j;
            document.getElementById(j).classList = 'py-2 my-2 bg-primary container';
        }    
    }
}

//========================================BT5====================================

// hàm xét SNT
function XetSNT(number) {
    var dem = 0;
    kQ = 0;
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            dem +=1;
            if (dem == 2) {
                kQ = true;
            } else if (dem > 2) {
                kQ = false;
            }
        }
    }
    return kQ;
}
// hàm xuất ra SNT
document.getElementById('btnSoNguyenTo').onclick = function() {
    // Input: number
    var soNguyenTo = Number(document.getElementById('soNguyenTo').value);
    // Output: string
    var chuoiSNT = '';
    // Progress:
    for (var i = 1; i <= soNguyenTo; i++) {
        var laySNT = XetSNT(i);
        if (laySNT === true) {
            chuoiSNT = chuoiSNT + i + ' ';
            document.getElementById('tagSoNguyenTo').innerHTML = chuoiSNT ;
        }
    }
}
var MaHopDongCuoi = 1;
var arrHopDong = Array();

function LuuThongTin() {
    var maHopDong = MaHopDongCuoi;
    var tenCuaBan = document.getElementById('txtTenCuaBan').value;
    var loaiHopDong = document.getElementById('cmbLoaiHopDong').value;
    var emailCuaBan = document.getElementById('emailCuaBan').value;


    var thongTin = { maHopDong, tenCuaBan, loaiHopDong, emailCuaBan};
    arrHopDong.push(thongTin);
    
    MaHopDongCuoi++;
    LoadDanhSachHopDong();
}

function XoathongTin(maHopDong) {
    for(var i = 0; i < arrHopDong.length; i++){
        if( maHopDong === arrHopDong[i].maHopDong) {
            arrHopDong.splice(i, 1);
            LoadDanhSachHopDong();
            break;
        }
    }
}

function CapNhatHopDong(maHopDong) {
    for(var i = 0; i < arrHopDong.length; i++){
        if( maHopDong === arrHopDong[i].maHopDong) {
            document.getElementById("txtMaHopDong").value = arrHopDong[i].maHopDong;
            document.getElementById("txtTenCuaBan").value = arrHopDong[i].tenCuaBan;
            document.getElementById("cmbLoaiHopDong").value = arrHopDong[i].loaiHopDong;
            document.getElementById("emailCuaBan").value = arrHopDong[i].emailCuaBan;
            break;
        }
    }
}

function LuuCapNhat() {
    for(var i = 0; i < arrHopDong.length; i++){
        if( document.getElementById("txtMaHopDong").value == arrHopDong[i].maHopDong) {
            arrHopDong[i].tenCuaBan = document.getElementById("txtTenCuaBan").value;
            arrHopDong[i].loaiHopDong = document.getElementById("cmbLoaiHopDong").value;
            arrHopDong[i].emailCuaBan = document.getElementById("emailCuaBan").value;

            document.getElementById("txtMaHopDong").value = "";
            document.getElementById("txtTenCuaBan").value = "";
            document.getElementById("emailCuaBan").value = "";

            LoadDanhSachHopDong();
            break;
        }
    }
}

function LoadDanhSachHopDong()
{
    
    var tbodyNode = document.getElementById('idDanhSachthongTin');
    tbodyNode.innerHTML = "";

    for(var i = 0; i < arrHopDong.length; i++)
    {
        var trNode = document.createElement('tr');

        var tdMaNode = document.createElement('td');
        var maNode = document.createTextNode(arrHopDong[i].maHopDong);
        tdMaNode.appendChild(maNode);

        var tdtenCuaBanNode = document.createElement('td');
        var tenNode = document.createTextNode(arrHopDong[i].tenCuaBan);
        tdtenCuaBanNode.appendChild(tenNode);

        var tdemailCuaBanNode = document.createElement('td');
        var emailNode = document.createTextNode(arrHopDong[i].emailCuaBan);
        tdemailCuaBanNode.appendChild(emailNode);

        var tdloaiHopDongNode = document.createElement('td');
        var loaiNode = document.createTextNode(arrHopDong[i].loaiHopDong);
        tdloaiHopDongNode.appendChild(loaiNode);

        var tdHanhDongNode = document.createElement('td');
        
        var btnXoaNode = document.createElement('button');
        btnXoaNode.type = "button";
        btnXoaNode.innerText = "Xóa";
        btnXoaNode.setAttribute('onclick', "XoathongTin(" + arrHopDong[i].maHopDong + ")");
        

        var btnCapNhatNode = document.createElement('button');
        btnCapNhatNode.type = "button";
        btnCapNhatNode.innerText = "Cập nhật";
        btnCapNhatNode.setAttribute('onclick',"CapNhatHopDong(" + arrHopDong[i].maHopDong + ")");

        tdHanhDongNode.appendChild(btnXoaNode);
        tdHanhDongNode.appendChild(btnCapNhatNode);

        trNode.appendChild(tdMaNode);
        trNode.appendChild(tdtenCuaBanNode);
        trNode.appendChild(tdemailCuaBanNode);
        trNode.appendChild(tdloaiHopDongNode);
        trNode.appendChild(tdHanhDongNode);

        tbodyNode.appendChild(trNode);
    }
    
    
}

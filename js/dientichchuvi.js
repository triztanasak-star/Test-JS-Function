// --- TRẠNG THÁI 1: Khi vừa load trang ---
// Tìm sẵn các thẻ input và các thẻ hiển thị kết quả trong bảng
let eleChieuDai = document.getElementById("chieuDai");
let eleChieuRong = document.getElementById("chieuRong");

let eleTxtDienTich = document.getElementById("txtDienTich");
let eleTxtChuVi = document.getElementById("txtChuVi");

// --- TRẠNG THÁI 2: Khi user click nút Tính Toán ---
document.getElementById("btnTinhHCN").addEventListener("click", function () {
    
    // Khối 1: Input - Lấy dữ liệu chiều dài và chiều rộng từ form
    let dai = Number(eleChieuDai.value);
    let rong = Number(eleChieuRong.value);

    // Kiểm tra điều kiện nhập nhanh (Độ dài các cạnh hình học phải lớn hơn 0)
    if (dai <= 0 || rong <= 0) {
        alert("Vui lòng nhập chiều dài và chiều rộng là các số lớn hơn 0!");
        return;
    }

    // Khối 2: Process - Tính toán dựa theo công thức đề bài cho
    let dienTich = dai * rong;
    let chuVi = (dai + rong) * 2;

    // Khối 3: Output - Gán giá trị tính được vào đúng vị trí trên bảng
    eleTxtDienTich.innerHTML = dienTich.toLocaleString();
    eleTxtChuVi.innerHTML = chuVi.toLocaleString();
});
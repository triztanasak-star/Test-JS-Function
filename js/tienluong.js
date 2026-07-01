// --- TRẠNG THÁI 1: Khi vừa load trang ---
let eleSoNgayLam = document.getElementById("soNgayLam");
let eleTxtTongLuong = document.getElementById("txtTongLuong"); // Tìm thẻ hiển thị số tiền
let luongMotNgay = 100000;

// --- TRẠNG THÁI 2: Khi user click nút ---
document.getElementById("btnTinhLuong").addEventListener("click", function () {
    
    // Lấy giá trị
    let valSoNgay = Number(eleSoNgayLam.value);

    // Tính toán
    let tongLuong = luongMotNgay * valSoNgay;

    // Gán thẳng số vào thẻ (Dùng .innerHTML hoặc .innerText đều được)
    eleTxtTongLuong.innerHTML = tongLuong.toLocaleString() + " VNĐ";
});
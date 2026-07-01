// --- TRẠNG THÁI 1: Khi vừa load trang ---
// Tìm sẵn các thẻ tương tác và định nghĩa tỷ giá cố định
let eleSoTienUSD = document.getElementById("soTienUSD");
let eleTxtTienVND = document.getElementById("txtTienVND");
let tyGiaUSD = 23500; // Giá USD theo đề bài: 23.500 VND

// --- TRẠNG THÁI 2: Khi user click nút quy đổi ---
document.getElementById("btnDoiTien").addEventListener("click", function () {
    
    // Khối 1: Input - Lấy số USD người dùng nhập vào
    let valUSD = Number(eleSoTienUSD.value);

    // Kiểm tra nhanh điều kiện nhập
    if (valUSD <= 0) {
        alert("Vui lòng nhập số tiền USD lớn hơn 0!");
        return;
    }

    // Khối 2: Process - Nhân số tiền USD với tỷ giá cố định
    let thanhTienVND = valUSD * tyGiaUSD;

    // Khối 3: Output - Đẩy số tiền VNĐ đã định dạng dấu phẩy vào bảng
    eleTxtTienVND.innerHTML = thanhTienVND.toLocaleString() + " VNĐ";
});
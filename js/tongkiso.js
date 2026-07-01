// --- TRẠNG THÁI 1: Khi vừa load trang ---
let eleSoNhap = document.getElementById("soNhap");
let eleTxtTongKySo = document.getElementById("txtTongKySo");

// --- TRẠNG THÁI 2: Khi user click nút tính toán ---
document.getElementById("btnTinhKySo").addEventListener("click", function () {
    
    // Khối 1: Input - Lấy số người dùng nhập vào
    let n = Number(eleSoNhap.value);

    // Kiểm tra nhanh xem user nhập đúng số có 2 chữ số không (từ 10 đến 99)
    if (n < 10 || n > 99) {
        alert("Vui lòng nhập chính xác một số có 2 chữ số nhen!");
        return;
    }

    // Khối 2: Process - Tách số hàng chục và hàng đơn vị
    // Lấy số hàng đơn vị bằng phép chia lấy dư (%) cho 10
    let soHangDv = n % 10; 
    
    // Lấy số hàng chục bằng phép chia cho 10 và làm tròn xuống bằng Math.floor
    let soHangChuc = Math.floor(n / 10); 

    // Tính tổng 2 ký số
    let tongKySo = soHangChuc + soHangDv;

    // Khối 3: Output - Đẩy kết quả vào bảng
    eleTxtTongKySo.innerHTML = tongKySo;
});
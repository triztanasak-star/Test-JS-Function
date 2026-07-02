// --- TRẠNG THÁI 1: Khi vừa load trang ---
// DOM các thẻ Input đầu vào
let eleTenKH = document.getElementById("tenKH");
let eleSoDien = document.getElementById("soDien");

// DOM các thẻ Output hiển thị kết quả
let eleTxtTenKhachHang = document.getElementById("txtTenKhachHang");
let eleTxtBac1 = document.getElementById("txtBac1");
let eleTxtBac2 = document.getElementById("txtBac2");
let eleTxtBac3 = document.getElementById("txtBac3");
let eleTxtBac4 = document.getElementById("txtBac4");
let eleTxtBac5 = document.getElementById("txtBac5");
let eleTxtTongTienDien = document.getElementById("txtTongTienDien");

// Định nghĩa hằng số giá điện dựa trên đề bài
const GIA_BAC_1 = 500;   // 50kw đầu
const GIA_BAC_2 = 650;   // 50kw kế (từ 51 - 100)
const GIA_BAC_3 = 850;   // 100kw kế (từ 101 - 200)
const GIA_BAC_4 = 1100;  // 150kw kế (từ 201 - 350)
const GIA_BAC_5 = 1300;  // Còn lại (từ 351 trở đi)

// --- TRẠNG THÁI 2: Lắng nghe sự kiện click ---
document.getElementById("btnTinhTienDien")?.addEventListener("click", function() {

    // --- Khối 1: Lấy Input ---
    let tenKH = eleTenKH.value.trim();
    let soDien = Number(eleSoDien.value);

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (tenKH === "") {
        alert("Vui lòng nhập tên khách hàng!");
        return;
    }
    if (soDien <= 0) {
        alert("Vui lòng nhập số Kw điện tiêu thụ lớn hơn 0!");
        return;
    }

    // Khai báo biến chứa tiền của từng bậc
    let tienBac1 = 0;
    let tienBac2 = 0;
    let tienBac3 = 0;
    let tienBac4 = 0;
    let tienBac5 = 0;
    let tongTienDien = 0;

    // --- Khối 2: Process (Thuật toán bóc tách luỹ tiến 5 bậc) ---
    if (soDien <= 50) {
        // Thuộc bậc 1
        tienBac1 = soDien * GIA_BAC_1;
    } 
    else if (soDien <= 100) {
        // Thuộc bậc 2
        tienBac1 = 50 * GIA_BAC_1;
        tienBac2 = (soDien - 50) * GIA_BAC_2;
    } 
    else if (soDien <= 200) {
        // Thuộc bậc 3 (50 đầu + 50 kế = 100)
        tienBac1 = 50 * GIA_BAC_1;
        tienBac2 = 50 * GIA_BAC_2;
        tienBac3 = (soDien - 100) * GIA_BAC_3;
    } 
    else if (soDien <= 350) {
        // Thuộc bậc 4 (50 + 50 + 100 = 200)
        tienBac1 = 50 * GIA_BAC_1;
        tienBac2 = 50 * GIA_BAC_2;
        tienBac3 = 100 * GIA_BAC_3;
        tienBac4 = (soDien - 200) * GIA_BAC_4;
    } 
    else {
        // Thuộc bậc 5 (Vượt quá 350 Kw)
        tienBac1 = 50 * GIA_BAC_1;
        tienBac2 = 50 * GIA_BAC_2;
        tienBac3 = 100 * GIA_BAC_3;
        tienBac4 = 150 * GIA_BAC_4;
        tienBac5 = (soDien - 350) * GIA_BAC_5;
    }

    // Cộng tổng tiền toàn bộ các bậc
    tongTienDien = tienBac1 + tienBac2 + tienBac3 + tienBac4 + tienBac5;

    // --- Khối 3: Xuất dữ liệu (Output) ---
    eleTxtTenKhachHang.innerHTML = `Khách hàng: ${tenKH}`;
    eleTxtBac1.innerHTML = tienBac1.toLocaleString() + "đ";
    eleTxtBac2.innerHTML = tienBac2.toLocaleString() + "đ";
    eleTxtBac3.innerHTML = tienBac3.toLocaleString() + "đ";
    eleTxtBac4.innerHTML = tienBac4.toLocaleString() + "đ";
    eleTxtBac5.innerHTML = tienBac5.toLocaleString() + "đ";
    eleTxtTongTienDien.innerHTML = tongTienDien.toLocaleString() + "đ";
});
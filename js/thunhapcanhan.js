// DOM các thẻ Input đầu vào
let eleHoTen = document.getElementById("hoTen");
let eleTongThuNhap = document.getElementById("tongThuNhap");
let eleSoNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc");

// DOM các vùng hiển thị kết quả
let eleBoxKetQua = document.getElementById("boxKetQua");
let eleTableChiTiet = document.getElementById("tableChiTiet");
let eleTxtThueB1 = document.getElementById("txtThueB1");
let eleTxtThueB2 = document.getElementById("txtThueB2");
let eleTxtThueB3 = document.getElementById("txtThueB3");
let eleTxtThueB4 = document.getElementById("txtThueB4");
let eleTxtThueB5 = document.getElementById("txtThueB5");
let eleTxtThueB6 = document.getElementById("txtThueB6");
let eleTxtThueB7 = document.getElementById("txtThueB7");

document.getElementById("btnTinhThue")?.addEventListener("click", function() {
    // --- Khối 1: Lấy Input & Kiểm tra ---
    let hoTen = eleHoTen.value.trim();
    let tongThuNhap = Number(eleTongThuNhap.value);
    let soNguoiPhuThuoc = Number(eleSoNguoiPhuThuoc.value);

    if (hoTen === "" || eleTongThuNhap.value === "" || eleSoNguoiPhuThuoc.value === "") {
        alert("Vui lòng điền đầy đủ thông tin yêu cầu!");
        return;
    }
    if (tongThuNhap < 0 || soNguoiPhuThuoc < 0) {
        alert("Thu nhập và số người phụ thuộc không được là số âm!");
        return;
    }

    // Đổi toàn bộ đơn vị tiền tệ sang "Triệu đồng" để tính toán cho gọn gàng theo đề bài
    let thuNhapTrieu = tongThuNhap / 1000000;

    // Áp dụng công thức đề bài: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr
    let tnChiuThue = thuNhapTrieu - 4 - (soNguoiPhuThuoc * 1.6);

    // Nếu thu nhập chịu thuế nhỏ hơn hoặc bằng 0 -> Không cần nộp thuế
    if (tnChiuThue <= 0) {
        eleBoxKetQua.classList.remove("d-none", "alert-danger");
        eleBoxKetQua.classList.add("alert-info");
        eleBoxKetQua.innerHTML = `Họ tên: ${hoTen} <br> <span class="fs-6 fw-normal text-dark">Thu nhập chịu thuế của bạn là 0đ. Bạn không cần phải nộp thuế thu nhập cá nhân!</span>`;
        eleTableChiTiet.classList.add("d-none"); // Ẩn bảng chi tiết
        return;
    }

    // Khai báo biến chứa tiền thuế từng bậc (đơn vị: Triệu)
    let thueB1 = 0, thueB2 = 0, thueB3 = 0, thueB4 = 0, thueB5 = 0, thueB6 = 0, thueB7 = 0;
    let tongTienThue = 0;

    // --- Khối 2: Xử lý logic lũy tiến 7 bậc dựa trên Thu nhập chịu thuế (tnChiuThue) ---
    if (tnChiuThue <= 60) {
        thueB1 = tnChiuThue * 0.05;
    } 
    else if (tnChiuThue <= 120) {
        thueB1 = 60 * 0.05;
        thueB2 = (tnChiuThue - 60) * 0.10;
    } 
    else if (tnChiuThue <= 210) {
        thueB1 = 60 * 0.05;
        thueB2 = 60 * 0.10; // (120 - 60 = 60)
        thueB3 = (tnChiuThue - 120) * 0.15;
    } 
    else if (tnChiuThue <= 384) {
        thueB1 = 60 * 0.05;
        thueB2 = 60 * 0.10;
        thueB3 = 90 * 0.15; // (210 - 120 = 90)
        thueB4 = (tnChiuThue - 210) * 0.20;
    } 
    else if (tnChiuThue <= 624) {
        thueB1 = 60 * 0.05;
        thueB2 = 60 * 0.10;
        thueB3 = 90 * 0.15;
        thueB4 = 174 * 0.20; // (384 - 210 = 174)
        thueB5 = (tnChiuThue - 384) * 0.25;
    } 
    else if (tnChiuThue <= 960) {
        thueB1 = 60 * 0.05;
        thueB2 = 60 * 0.10;
        thueB3 = 90 * 0.15;
        thueB4 = 174 * 0.20;
        thueB5 = 240 * 0.25; // (624 - 384 = 240)
        thueB6 = (tnChiuThue - 624) * 0.30;
    } 
    else {
        // Vượt bậc cao nhất (Trên 960 triệu)
        thueB1 = 60 * 0.05;
        thueB2 = 60 * 0.10;
        thueB3 = 90 * 0.15;
        thueB4 = 174 * 0.20;
        thueB5 = 240 * 0.25;
        thueB6 = 336 * 0.30; // (960 - 624 = 336)
        thueB7 = (tnChiuThue - 960) * 0.35;
    }

    // Tính tổng số tiền thuế (Đổi ngược từ đơn vị Triệu về VNĐ đầy đủ)
    let doiVeVND = 1000000;
    tongTienThue = (thueB1 + thueB2 + thueB3 + thueB4 + thueB5 + thueB6 + thueB7) * doiVeVND;

    // --- Khối 3: Xuất kết quả ra giao diện ---
    eleBoxKetQua.classList.remove("d-none", "alert-info");
    eleBoxKetQua.classList.add("alert-danger"); // Đổi màu đỏ nổi bật vì là tiền nộp phạt/thuế
    
    eleBoxKetQua.innerHTML = `
        Họ tên: ${hoTen} <br>
        <span class="fs-5 text-danger">Tổng thuế thu nhập phải trả: ${tongTienThue.toLocaleString()} VNĐ</span>
    `;

    // Cập nhật giá trị chi tiết tiền tệ vào bảng và hiển thị bảng ra ngoài
    eleTxtThueB1.innerHTML = (thueB1 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB2.innerHTML = (thueB2 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB3.innerHTML = (thueB3 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB4.innerHTML = (thueB4 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB5.innerHTML = (thueB5 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB6.innerHTML = (thueB6 * doiVeVND).toLocaleString() + "đ";
    eleTxtThueB7.innerHTML = (thueB7 * doiVeVND).toLocaleString() + "đ";
    
    eleTableChiTiet.classList.remove("d-none");
});
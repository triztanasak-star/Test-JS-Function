// --- TRẠNG THÁI 1: Khi vừa load trang ---
// Tìm sẵn 5 thẻ input nhập số và thẻ hiển thị kết quả
let eleNum1 = document.getElementById("num1");
let eleNum2 = document.getElementById("num2");
let eleNum3 = document.getElementById("num3");
let eleNum4 = document.getElementById("num4");
let eleNum5 = document.getElementById("num5");

let eleTxtTrungBinh = document.getElementById("txtTrungBinh");

// --- TRẠNG THÁI 2: Khi user click nút ---
document.getElementById("btnTinhTrungBinh").addEventListener("click", function () {
    
    // Khối 1: Input - Lấy giá trị của 5 ô và chuyển sang kiểu số thực (Number)
    let val1 = Number(eleNum1.value);
    let val2 = Number(eleNum2.value);
    let val3 = Number(eleNum3.value);
    let val4 = Number(eleNum4.value);
    let val5 = Number(eleNum5.value);

    // Khối 2: Process - Cộng tổng 5 số lại rồi chia cho 5 theo công thức
    let giaTriTrungBinh = (val1 + val2 + val3 + val4 + val5) / 5;

    // Khối 3: Output - Đẩy số kết quả vào bảng
    // Dùng .toFixed(2) để phòng trường hợp số bị lẻ quá dài (ví dụ: 3.33333... sẽ thu gọn thành 3.33)
    eleTxtTrungBinh.innerHTML = giaTriTrungBinh.toLocaleString();
});
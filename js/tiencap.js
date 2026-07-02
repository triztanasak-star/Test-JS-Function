// DOM các thẻ Input đầu vào
let eleMaKH = document.getElementById("maKH");
let eleLoaiKH = document.getElementById("loaiKH");
let eleSoKetNoi = document.getElementById("soKetNoi");
let eleSoKenh = document.getElementById("soKenh");

// DOM khu vực hiển thị kết quả
let eleTxtKetQua = document.getElementById("txtKetQua1");

// ==========================================
// CHỨC NĂNG 1: Bật/Tắt ô nhập "Số kết nối" dựa theo loại khách hàng
// ==========================================
eleLoaiKH.addEventListener("change", function() {
    let loaiKH = eleLoaiKH.value;
    let labelKetNoi = document.querySelector("#groupKetNoi label");

    if (loaiKH === "doanhNghiep") {
        eleSoKetNoi.disabled = false; // Mở khóa ô nhập
        eleSoKetNoi.value = ""; // Xóa số 0 mặc định để người dùng nhập
        labelKetNoi.classList.remove("text-muted"); // Làm sáng chữ label
    } else {
        eleSoKetNoi.disabled = true; // Khóa ô nhập lại
        eleSoKetNoi.value = "0"; // Reset về 0
        labelKetNoi.classList.add("text-muted"); // Làm mờ chữ label
    }
});

// ==========================================
// CHỨC NĂNG 2: Tính tiền cáp khi click nút
// ==========================================
document.getElementById("btnTinhTienCap")?.addEventListener("click", function() {
    // --- Khối 1: Lấy dữ liệu Input ---
    let maKH = eleMaKH.value.trim();
    let loaiKH = eleLoaiKH.value;
    let soKetNoi = Number(eleSoKetNoi.value);
    let soKenh = Number(eleSoKenh.value);

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (maKH === "") {
        alert("Vui lòng nhập Mã khách hàng!");
        return;
    }
    if (soKenh < 0 || soKetNoi < 0) {
        alert("Số kênh và số kết nối không được nhỏ hơn 0!");
        return;
    }

    let tongTienCap = 0;

    // --- Khối 2: Xử lý tính toán (Process) ---
    if (loaiKH === "nhanDan") {
        // Công thức cho Nhà dân: 4.5$ + 20.5$ + (số kênh * 7.5$)
        tongTienCap = 4.5 + 20.5 + (soKenh * 7.5);
    } 
    else if (loaiKH === "doanhNghiep") {
        // 1. Tính phí dịch vụ cơ bản lũy tiến theo số kết nối
        let phiDichVuCoBan = 0;
        if (soKetNoi <= 10) {
            phiDichVuCoBan = 75; // 10 kết nối đầu tính giá 75$
        } else {
            phiDichVuCoBan = 75 + (soKetNoi - 10) * 5; // Từ kết nối thứ 11 cộng thêm 5$/kết nối
        }

      // 2. Tổng tiền doanh nghiệp: 15$ (phí hóa đơn) + phí cơ bản + (số kênh * 50$)
        tongTienCap = 15 + phiDichVuCoBan + (soKenh * 50);
    } // Dòng 66 cũ của bạn

    // --- Khối 3: Xuất kết quả (Output) ---
    eleTxtKetQua.classList.remove("d-none");
    
    // Sử dụng hàm định dạng hiển thị tiền tệ dạng USD
    let dinhDangUSD = tongTienCap.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    eleTxtKetQua.innerHTML = `
        Mã khách hàng: ${maKH} <br>
        <span class="fs-5 text-primary">Tiền cáp phải thanh toán: ${dinhDangUSD}</span>
    `;
}); // CHỈ CẦN GIỮ LẠI ĐÚNG DÒNG NÀY Ở CUỐI CÙNG (Dòng 78)
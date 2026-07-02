// DOM các thẻ Input đầu vào
let eleDiemChuan = document.getElementById("diemChuan");
let eleDiemMon1 = document.getElementById("diemMon1");
let eleDiemMon2 = document.getElementById("diemMon2");
let eleDiemMon3 = document.getElementById("diemMon3");
let eleKhuVuc = document.getElementById("khuVuc");
let eleDoiTuong = document.getElementById("doiTuong");

// DOM khu vực hiển thị kết quả
let eleTxtKetQua = document.getElementById("txtKetQua");

document.getElementById("btnXetTuyen")?.addEventListener("click", function() {
    // --- Khối 1: Lấy dữ liệu Input ---
    let diemChuan = Number(eleDiemChuan.value);
    let m1 = Number(eleDiemMon1.value);
    let m2 = Number(eleDiemMon2.value);
    let m3 = Number(eleDiemMon3.value);
    let khuVuc = eleKhuVuc.value;
    let doiTuong = eleDoiTuong.value;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào cơ bản
    if (eleDiemChuan.value === "" || eleDiemMon1.value === "" || eleDiemMon2.value === "" || eleDiemMon3.value === "") {
        alert("Vui lòng điền đầy đủ điểm chuẩn và điểm 3 môn thi!");
        return;
    }

    // --- Khối 2: Xử lý logic điểm ưu tiên ---
    let diemUuTienKV = 0;
    let diemUuTienDT = 0;

    // Xét điểm khu vực
    switch (khuVuc) {
        case "A": diemUuTienKV = 2; break;
        case "B": diemUuTienKV = 1; break;
        case "C": diemUuTienKV = 0.5; break;
        default: diemUuTienKV = 0; // Trường hợp "X"
    }

    // Xét điểm đối tượng
    switch (doiTuong) {
        case "1": diemUuTienDT = 2.5; break;
        case "2": diemUuTienDT = 1.5; break;
        case "3": diemUuTienDT = 1; break;
        default: diemUuTienDT = 0; // Trường hợp "0"
    }

    let tongDiemUuTien = diemUuTienKV + diemUuTienDT;

    // --- Khối 3: Tính toán điểm tổng kết và Xét tuyển ---
    let tongDiemDatDuoc = m1 + m2 + m3 + tongDiemUuTien;
    let ketQuaXetTuyen = "";

    // Kiểm tra điều kiện: điểm tổng kết >= điểm chuẩn VÀ không môn nào bị 0 điểm
    if (m1 === 0 || m2 === 0 || m3 === 0) {
        ketQuaXetTuyen = "Bạn đã rớt. Do có môn bị điểm liệt (0 điểm).";
    } else if (tongDiemDatDuoc >= diemChuan) {
        ketQuaXetTuyen = "Bạn đã trúng tuyển!";
    } else {
        ketQuaXetTuyen = "Bạn đã rớt. Do thiếu điểm so với điểm chuẩn.";
    }

    // --- Khối 4: Hiển thị kết quả ra màn hình ---
    // Hiện khung alert kết quả
    eleTxtKetQua.classList.remove("d-none");
    
    // Đổi màu khung tuỳ theo đậu hay rớt để giao diện trực quan hơn
    if (tongDiemDatDuoc >= diemChuan && m1 !== 0 && m2 !== 0 && m3 !== 0) {
        eleTxtKetQua.classList.remove("alert-danger");
        eleTxtKetQua.classList.add("alert-success"); // Màu xanh lá khi đậu
    } else {
        eleTxtKetQua.classList.remove("alert-success");
        eleTxtKetQua.classList.add("alert-danger"); // Màu đỏ khi rớt
    }

    // In thông tin tổng điểm và trạng thái ra giao diện
    eleTxtKetQua.innerHTML = `
        <p class="mb-1">${ketQuaXetTuyen}</p>
        <span class="fs-6 text-dark fw-normal">
            (Tổng số điểm đạt được: <strong class="text-primary">${tongDiemDatDuoc} điểm</strong> 
            - Trong đó điểm ưu tiên là: ${tongDiemUuTien}đ)
        </span>
    `;
});
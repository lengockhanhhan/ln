function login(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "abc" && password === "123") {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html"; // Chuyển hướng đến trang home.html
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không hợp lệ!"); 
    }
}

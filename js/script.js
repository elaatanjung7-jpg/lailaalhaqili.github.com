// LOGIN FUNCTION
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Username & password sederhana (bisa kamu ganti)
    if (username === "admin" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah!");
    }
}
// REGISTER MEMBER
function registerMember(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Simpan data sementara di localStorage
    const memberData = {
        firstName,
        lastName,
        email,
        phone
    };

    localStorage.setItem("memberData", JSON.stringify(memberData));

    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";
}
// CHECK LOGIN (dipakai di halaman utama)
function checkLogin() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

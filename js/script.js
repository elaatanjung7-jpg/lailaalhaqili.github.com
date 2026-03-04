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

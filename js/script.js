function register() {
    localStorage.setItem("firstName", document.getElementById("regFirstName").value);
    localStorage.setItem("lastName", document.getElementById("regLastName").value);
    localStorage.setItem("password", document.getElementById("regPassword").value);

    alert("Pendaftaran berhasil!");
    window.location.href = "login.html";
}

function login() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;

    if (
        firstName === localStorage.getItem("firstName") &&
        lastName === localStorage.getItem("lastName") &&
        password === localStorage.getItem("password")
    ) {
        window.location.href = "home.html";
    } else {
        alert("Data salah atau belum daftar!");
    }
}

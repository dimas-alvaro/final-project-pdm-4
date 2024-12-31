function showRegister() {
  document.querySelector(".login-section").style.display = "none";
  document.querySelector(".register-section").style.display = "block";
  document.querySelector(".reset-password-section").style.display = "none";
}

function showLogin() {
  document.querySelector(".login-section").style.display = "block";
  document.querySelector(".register-section").style.display = "none";
  document.querySelector(".reset-password-section").style.display = "none";
}

function showResetPassword() {
  document.querySelector(".login-section").style.display = "none";
  document.querySelector(".register-section").style.display = "none";
  document.querySelector(".reset-password-section").style.display = "block";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Cek apakah login untuk owner
  if (email === "owner@laundry.com" && password === "owner123") {
    sessionStorage.setItem("userRole", "owner"); // Simpan peran sebagai owner
    window.location.href = "owner-dashboard.html"; // Redirect ke halaman owner
  }
  // Cek apakah login untuk customer
  else if (email.endsWith("@gmail.com") && password !== "") {
    sessionStorage.setItem("userRole", "customer"); // Simpan peran sebagai customer
    window.location.href = "customer-dashboard.html"; // Redirect ke halaman customer
  } else {
    alert("Email atau password salah");
  }
}

function register() {
  alert("Registrasi berhasil!");
  // Tambahkan logika registrasi
}

function resetPassword() {
  alert("Link reset password telah dikirim!");
  // Tambahkan logika reset password
}

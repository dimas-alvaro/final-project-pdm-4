//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav
const hamburger = documen.querySelector("#hamburuger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Fungsi untuk menampilkan form register
// function showRegister() {
//   console.log("Show Register Form"); // Debug log
//   document.getElementById("login-form").style.display = "none";
//   document.getElementById("register-form").style.display = "block";
//   document.getElementById("reset-password-form").style.display = "none";
// }

// Fungsi untuk menampilkan form login
// function showLogin() {
//   console.log("Show Login Form"); // Debug log
//   document.getElementById("login-form").style.display = "block";
//   document.getElementById("register-form").style.display = "none";
//   document.getElementById("reset-password-form").style.display = "none";
// }

// Fungsi untuk menampilkan form reset password
// function showResetPassword() {
//   console.log("Show Reset Password Form"); // Debug log
//   document.getElementById("login-form").style.display = "none";
//   document.getElementById("register-form").style.display = "none";
//   document.getElementById("reset-password-form").style.display = "block";
// }

// Fungsi untuk handle register
// function register() {
//   const name = document.getElementById("reg-name").value;
//   const email = document.getElementById("reg-email").value;
//   const password = document.getElementById("reg-password").value;

//   console.log(
//     `Register Info - Name: ${name}, Email: ${email}, Password: ${password}`
//   ); // Debug log

//   if (email.includes("@gmail.com")) {
//     alert(`Register successful! Name: ${name}, Email: ${email}`);
//     showLogin(); // Tampilkan form login setelah register berhasil
//   } else {
//     alert("Email harus menggunakan domain @gmail.com");
//   }
// }

// Fungsi untuk handle login
// function login() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   console.log(`Login Attempt - Email: ${email}, Password: ${password}`); // Debug log

//   if (email === "owner@laundry.com" && password === "owner123") {
//     alert("Login successful! Welcome, owner");
//     console.log("Redirecting to owner-dashboard.html"); // Debug log
//     window.location.href = "owner-dashboard.html"; // Redirect ke halaman dashboard owner
//   } else if (email.includes("@gmail.com") && password) {
//     alert(`Login successful! Welcome, ${email}`);
//     console.log("Redirecting to terms.html"); // Debug log
//     window.location.href = "terms.html"; // Redirect ke halaman syarat dan ketentuan
//   } else {
//     alert("Invalid email or password");
//     console.log("Invalid email or password"); // Debug log
//   }
// }

// Fungsi untuk handle reset password
// function resetPassword() {
//   const email = document.getElementById("reset-email").value;

//   console.log(`Reset Password Request - Email: ${email}`); // Debug log

//   if (email) {
//     alert(`Password reset link has been sent to ${email}`);
//     showLogin(); // Kembali ke form login setelah mengirim link reset
//   } else {
//     alert("Please enter your email");
//     console.log("Please enter your email"); // Debug log
//   }
// }

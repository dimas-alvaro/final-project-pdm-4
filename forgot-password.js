// forgot-password.js

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Simulasi proses pengiriman email reset password
    if (email.endsWith('@gmail.com')) {
        document.getElementById('message').innerText = 'A password reset link has been sent to ' + email;
    } else {
        document.getElementById('message').innerText = 'Sorry, we cannot reset your password. Please use a valid @gmail.com email address.';
    }
});

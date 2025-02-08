function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !phone || password.length < 8) {
        alert("Please fill in all fields correctly. Password must be at least 8 characters long.");
        return;
    }
    
    alert("Sign Up Successful");
    window.location.href = "home.html"; // Redirect to homepage
});

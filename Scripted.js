document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const location = document.getElementById("location").value;
    const phone = document.getElementById("phone").value;
    const termsAccepted = document.getElementById("terms").checked;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!termsAccepted) {
        alert("You must accept the Terms and Conditions to sign up.");
        return;
    }

    // Code to handle the signup logic
    alert(`Sign up successful for ${email} from ${location}`);
});

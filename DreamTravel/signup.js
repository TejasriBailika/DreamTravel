document.getElementById("sign-up-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get user input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Store the user's data in local storage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Sign-Up successful!");
  window.location.href = "sign-in.html"; // Redirect to sign-in page after sign-up
});



document.getElementById("sign-up-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Sign-Up successful!");
  window.location.href = "sign-in.html";
});



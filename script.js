document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Validate email
  if (!email.value || !email.value.includes("@")) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }

  // Validate password
  if (!password.value) {
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
  }

  // Proceed if valid
  if (!email.classList.contains("is-invalid") && !password.classList.contains("is-invalid")) {
    alert("Login successful!");
  }
});

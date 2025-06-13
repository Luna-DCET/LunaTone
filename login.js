// FORM SUBMIT 
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // GET EMAIL AND PASSWORD 
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // GET  USER DATA FROM LOCAL 
  const savedUser = JSON.parse(localStorage.getItem("user"));

  // VALIDATE  CREDENTIALS
  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    alert("Invalid email or password.");
    return;
  }

  // SET LOGIN, TO HOMEPAGE
  localStorage.setItem("isLoggedIn", "true");
  alert("Login successful!");
  window.location.href = "index.html";
});

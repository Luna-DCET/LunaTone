
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // PREVENT DEFAULT FORM ACTION (PAGE REFRESH)

  // GET INPUT 
  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  // CHECK FIELD EMPTY
  if (!username || !email || !password) {
    alert("Please fill in all fields."); // SHOW ALERT IF MISSING
    return;
  }

  // STORE LOCAL 
  const userData = { username, email, password };
  localStorage.setItem("user", JSON.stringify(userData));

  // SET STATUS
  localStorage.setItem("isLoggedIn", "true");

  // NOTIFY
  alert("Signup successful!");
  window.location.href = "index.html"; // REDIRECT TO HOMEPAGE
});

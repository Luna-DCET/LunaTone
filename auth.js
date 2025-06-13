// AUTH.JS

// RUNS AFTER FULLY LOADED
document.addEventListener("DOMContentLoaded", function () {

  // GETS REFERENCES 
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");
  const userButton = document.getElementById("userButton");
  const logoutButton = document.getElementById("logoutButton");

  // CHECKS IF LOGGED IN
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // SHOWS OR HIDES BUTTONS 
  if (isLoggedIn === "true") {
    if (loginButton) loginButton.style.display = "none";
    if (signupButton) signupButton.style.display = "none";
    if (userButton) userButton.style.display = "inline-block";
    if (logoutButton) logoutButton.style.display = "inline-block";
  } else {
    if (loginButton) loginButton.style.display = "inline-block";
    if (signupButton) signupButton.style.display = "inline-block";
    if (userButton) userButton.style.display = "none";
    if (logoutButton) logoutButton.style.display = "none";
  }

  // CLEAR LOGIN DATA
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#my-form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const errorMsg = document.querySelector("#error-msg");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    
    const user = username.value.trim();
    const pass = password.value.trim();

    if (user === "" || pass === "") {
      errorMsg.textContent = "Both username and password are required!";
      errorMsg.style.display = "block";

      setTimeout(() => {
        errorMsg.style.display = "none";
      }, 3000);
    } else {
      errorMsg.style.display = "none"; 

      window.location.href = form.action;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#purchase-form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const errorMsg = document.querySelector("#error-msg");
  const address=document.querySelector("#address");
  const payment=document.querySelector("#payment");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    
    const Name = name.value.trim();
    const Email = email.value.trim();
    const Address=address.value.trim();
    const Payment=payment.value.trim();

    if (Name === "" || Email === "" || Address==="" || Payment==="") {
      errorMsg.textContent = "please fill the blocks";
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

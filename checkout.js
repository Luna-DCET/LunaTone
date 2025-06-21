document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cartContainer");
  const totalPriceEl = document.getElementById("totalPrice");
  const billingForm = document.getElementById("billingForm");

  // LOAD, DISPLAY CART
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.length) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "₱0.00";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-left">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-middle">
        <h3>${item.name}</h3>
        <p>₱${item.price} x ${item.quantity}</p>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  totalPriceEl.textContent = `₱${total.toFixed(2)}`;

  // FORM SUBMISSION
  billingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // FORM DATA
    const formData = Array.from(billingForm.elements)
      .filter(el => el.tagName === "INPUT")
      .reduce((acc, input) => {
        acc[input.placeholder] = input.value;
        return acc;
      }, {});

    // SAVE LOCALSTORAGE
    localStorage.setItem("billingInfo", JSON.stringify(formData));
    
    // PROCEED TO NEXT PAGE
    window.location.href = "checkoutdone.html";
  });
});

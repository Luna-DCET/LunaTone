
// WHEN FULLY LOADED
document.addEventListener("DOMContentLoaded", function () {
  // CART ITEMS WILL BE DISPLAY
  const cartContainer = document.getElementById("cartContainer");

  // CART DATA FROM LOCAL
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // CART ITEMS 
  function renderCart() {
    // CLEAR CART
    cartContainer.innerHTML = "";

    // IF CART IS EMPTY
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    // LOOP THROUGH EACH ITEM
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      //  HTML FOR ITEM
      cartItem.innerHTML = `
        <div class="cart-item-left">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-middle">
          <h3>${item.name}</h3>
          <p>₱${item.price}</p>
          <p>Qty: ${item.quantity}</p>
        </div>
        <div class="cart-item-right">
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `;

      // ADD ITEM 
      cartContainer.appendChild(cartItem);
    });

    // REMOVE BUTTONS
    attachRemoveHandlers();
  }

  // REMOVE ITEMS FROM CART
  function attachRemoveHandlers() {
    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
      button.addEventListener("click", function () {
        const idToRemove = this.getAttribute("data-id");

        // REMOVE ITEM BASED ON ID
        cart = cart.filter(item => String(item.id) !== String(idToRemove));

        // UPDATE LOCAL
        localStorage.setItem("cart", JSON.stringify(cart));

        // RE-RENDER CART
        renderCart();
      });
    });
  }

  // CALL RENDER
  renderCart();
});

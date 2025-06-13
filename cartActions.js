
document.querySelectorAll(".add-to-cart-button").forEach(button => {
  button.addEventListener("click", function () {
    // LOGGED IN
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please log in to add items to your cart.");
      window.location.href = "login.html";
      return;
    }

    // GET PRODUCT INFO
    const productCard = this.closest(".product-card");
    const id = productCard.getAttribute("data-id");
    const name = productCard.querySelector(".product-name").textContent;
    const quantity = parseInt(productCard.querySelector(".quantity-input").value);
    const image = productCard.querySelector("img").getAttribute("src");
    const priceText = productCard.querySelector(".product-price").textContent.trim();
    const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

    // GET CART
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ITEM EXISTS
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id, name, quantity, image, price });
    }

    // CONFIRM CART
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  });
});

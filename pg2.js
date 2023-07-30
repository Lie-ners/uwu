// Wraps the entire JavaScript logic inside an event listener for the "DOMContentLoaded" event. 
// Ensures that the JavaScript code will execute only after the HTML document fully loads and parsed by the browser.

document.addEventListener("DOMContentLoaded", function () {
  
// Selects all the elements with the class "add-cart" and stores them in the addToCartButtons variable. 
// These elements are the "Add To Cart" buttons on the product items. 
    const addtocartbuttons = document.querySelectorAll(".add-cart");

// This loop iterates over each "Add To Cart" button and adds a click event listener to each of them. 
// When a button is clicked, the handleAddToCart function will be called.
    addtocartbuttons.forEach((button) => {
        button.addEventListener("click", handleAddToCart);
    });

// selects the element with the ID "reset-cart-btn" from the HTML document and stores it in the resetCartBtn variable. 
// This element is the "Reset Cart" button.
    const resetcartbtn = document.getElementById("reset-cart-btn");
    resetcartbtn.addEventListener("click", handleResetCart);

// Retrieves the product name and price from the button's custom data-product and data-price attributes
// It then updates the user's shopping cart stored in the browser's localStorage and calls the displayCart function to update the cart's display
    function handleAddToCart(event) {
        const product = event.target.getAttribute("data-product");
        const price = parseFloat(event.target.getAttribute("data-price"));

        let cartItems = [];

        if (localStorage.getItem("cartItems")) {
            cartItems = JSON.parse(localStorage.getItem("cartItems"));
        }

        cartItems.push({ product, price });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCart(cartItems);

        console.log("Added to cart: ", product, price);

    }
// The displayCart function takes an array of cartItems as input and updates the cart's display on the webpage. 
// It calculates the total price of all the items in the cart and displays each item's name and price in an unordered list. 
// It also displays the total price at the bottom.
    function displayCart(cartItems) {
        const cartList = document.getElementById("cart-items");
        const totalPriceDisplay = document.getElementById("total-price");
        let total = 0;

        cartList.innerHTML = "";

        cartItems.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price;
        });

        totalPriceDisplay.textContent = `Total Price: $${total.toFixed(2)}`;
    }

// The handleResetCart function is called when the "Reset Cart" button is clicked. 
// It removes the cart data from the browser's localStorage and clears the cart display on the webpage.
    function handleResetCart() {
        localStorage.removeItem("cartItems");

        const cartList = document.getElementById("cart-items");
        cartList.innerHTML = "";

        const totalPriceDisplay = document.getElementById("total-price");
        totalPriceDisplay.textContent = "Total Price: $0";

        console.log("Cart has been reset.");
    }

// This condition checks if there are any items in the cart stored in the browser's localStorage. 
// If there are, it retrieves them, parses the data, and calls the displayCart function to show the cart's contents on the webpage when the page loads.
    if (localStorage.getItem("cartItems")) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));
        displayCart(cartItems);
    }
});
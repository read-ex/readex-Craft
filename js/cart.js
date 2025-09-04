        document.addEventListener('DOMContentLoaded', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartProduct = document.querySelector('.cart-product');
            const emptyIcon = document.querySelector('.Empty-Icon');
            const productsAndDetails = document.querySelector('.products-and-details');
            const cartPriceDetails = document.querySelector('.cart-price-details');
            if (cart.length === 0) {
                if (productsAndDetails) productsAndDetails.style.display = 'none';
                if (cartPriceDetails) cartPriceDetails.style.display = 'none';
                if (emptyIcon) emptyIcon.style.display = 'flex';
            } else {
                if (productsAndDetails) productsAndDetails.style.display = 'flex';
                if (cartPriceDetails) cartPriceDetails.style.display = 'block';
                if (emptyIcon) emptyIcon.style.display = 'none';

                // Only showing the first product for this template
                const product = cart[0];
                document.querySelector('.cart-product-img').src = product.image;
                document.querySelector('.cart-product-title span').textContent = product.name;
                document.querySelector('.cart-product-title p').innerHTML = `<span style="font-family: degular-medium;">${product.name}</span>`;
                document.querySelector('.cart-product-price-value').textContent = product.price;
                document.querySelector('.cart-product-quantity').textContent = product.quantity;

                // Remove product from cart
                document.querySelector('.cart-product-cross-icon img').onclick = function() {
                    localStorage.removeItem('cart');
                    if (productsAndDetails) productsAndDetails.style.display = 'none';
                    if (emptyIcon) emptyIcon.style.display = 'flex';
                    if (cartPriceDetails) cartPriceDetails.style.display = 'none';
                    // Optionally, reload page or update price details
                    window.location.reload();
                };

                // Quantity increase/decrease
                document.getElementById('increase').onclick = function() {
                    product.quantity += 1;
                    document.querySelector('.cart-product-quantity').textContent = product.quantity;
                    cart[0].quantity = product.quantity;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    // Optionally, update price details
                };
                document.getElementById('decrease').onclick = function() {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                        document.querySelector('.cart-product-quantity').textContent = product.quantity;
                        cart[0].quantity = product.quantity;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        // Optionally, update price details
                    }
                };
            }
        });
        window.addEventListener('load', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const checkoutBtn = document.querySelector('.checkout-btn');
            const arrow =`<img src="Assets/icons/Button-arrow-right.png" width="26px">`;
            if (checkoutBtn) {
                if (cart.length === 0) {
                    checkoutBtn.innerHTML = 'Continue Shopping' + arrow;       checkoutBtn.onclick = function() {
                    checkoutBtn.classList.add('gotoshop'); // Add your desired class name
                    window.location.href = 'shop.html'; // Change to your shop page URL// Change to your shop page URL
                    };
                } else {
                    checkoutBtn.innerHTML = 'Checkout'+ arrow;
                    checkoutBtn.onclick = function() {
                        window.location.href = 'address.html'; // Change to your checkout page URL
                    };
                }
            }

        });


                const decreaseBtn = document.getElementById('decrease');
                const increaseBtn = document.getElementById('increase');
                const quantityValue = document.getElementById('quantity-value');
                let quantity = 1;

                function updateQuantityDisplay() {
                    quantityValue.textContent = quantity;
                }

                decreaseBtn.addEventListener('click', function() {
                    if (quantity > 1) {
                        quantity--;
                        updateQuantityDisplay();
                    }
                });

                increaseBtn.addEventListener('click', function() {
                    quantity++;
                    updateQuantityDisplay();
                });

                 const addToCartBtn = document.getElementById('addToCartBtn');
            const cartAnim = document.getElementById('cart-animation');
            const notAddedText = document.querySelector('.not-added');
            addToCartBtn.addEventListener('click', function() {
            addToCartBtn.classList.add('animated');
            cartAnim.style.display = 'inline';
            cartAnim.style.opacity = '1';
            notAddedText.style.display = 'none';
            setTimeout(() => {
                addToCartBtn.classList.remove('animated');
                cartAnim.style.opacity = '0';
            }, 1200);
            setTimeout(() => {
                cartAnim.style.display = 'none';
                notAddedText.style.display = 'block';
            }, 1500);
            });



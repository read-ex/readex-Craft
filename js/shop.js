   // Product data
                        const products = [
                            {
                                id: "search-adjustable-quran-stand",
                                name: "Adjustable Quran Stand",
                                img: "Assets/img/product-1.png",
                                price: 3950,
                                oldPrice: 4500,
                                keywords: "adjustable quran stand"
                            },
                            {
                                id: "search-canvas-wall-painting",
                                name: "Canvas Wall Painting",
                                img: "Assets/img/0001.png",
                                price: 3950,
                                oldPrice: 4500,
                                keywords: "canvas wall painting"
                            }
                        ];

                        const searchProductsDiv = document.getElementById('search-products');
                        const productsHTML = products.map(product => `
                            <div class="shpe-product" id="${product.id}">
                                <div class="shpe-product-image"><img src="${product.img}"></div>
                                <div class="shope-product-discription">
                                    <p class="shope-product-name">${product.name.replace(' ', '<br>')}</p>
                                    <div class="product-price-row">
                                        <span class="price current-price"><span class="price-icon">₹</span><span class="price-value">${product.price}</span></span>
                                        <div class="old-price-container">
                                            <span class="price old-price"><span class="price-icon">₹</span><span class="price-value">${product.oldPrice}</span></span>
                                            <img src="Assets/icons/Line 7.png" class="line-through-img" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('');

                        // Show/hide products based on search
                        function showProducts(query) {
                            if (query.trim().length > 0) {
                                // Filter products
                                const filtered = products.filter(p =>
                                    p.name.toLowerCase().includes(query.toLowerCase())
                                );
                                if (filtered.length > 0) {
                                    searchProductsDiv.innerHTML = filtered.map(product => `
                                        <div class="shpe-product" id="${product.id}">
                                            <div class="shpe-product-image"><img src="${product.img}"></div>
                                            <div class="shope-product-discription">
                                                <p class="shope-product-name">${product.name.replace(' ', '<br>')}</p>
                                                <div class="product-price-row">
                                                    <span class="price current-price"><span class="price-icon">₹</span><span class="price-value">${product.price}</span></span>
                                                    <div class="old-price-container">
                                                        <span class="price old-price"><span class="price-icon">₹</span><span class="price-value">${product.oldPrice}</span></span>
                                                        <img src="Assets/icons/Line 7.png" class="line-through-img" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('');
                                    searchProductsDiv.style.display = 'grid';
                                } else {
                                    searchProductsDiv.innerHTML = "<p>No products found.</p>";
                                    searchProductsDiv.style.display = 'block';
                                }
                            } else {
                                searchProductsDiv.style.display = 'grid';
                                productsHTML
                            }
                        }

                        // Attach to search box
                        document.getElementById('search-box').addEventListener('input', function(e) {
                            showProducts(e.target.value);
                        });

                           // Demo suggestions
            const suggestions = [
            '<img src="Assets/icons/majesticons_arrow-up.svg" style="width:18px;vertical-align:middle;margin-right:8px;">Adjustable Quran Stand',
            '<img src="Assets/icons/majesticons_arrow-up.svg" style="width:18px;vertical-align:middle;margin-right:8px;">Canvas Wall Painting'
            ];

            const openBtn = document.getElementById('open-search');
            const overlay = document.getElementById('search-overlay');
            const closeBtn = document.getElementById('close-search');
            const searchBox = document.getElementById('search-box');
            const suggestionsList = document.getElementById('suggestions-list');

            openBtn.onclick = (e) => {
            // Get button position for animation origin
            const btnRect = openBtn.getBoundingClientRect();
            // Set transform-origin to button's center X
            const modal = overlay.querySelector('.search-modal');
            modal.style.transformOrigin = `${btnRect.left + btnRect.width/2}px top`;
            overlay.style.display = 'flex';
            // Force reflow to enable transition
            void modal.offsetWidth;
            overlay.classList.add('active');
            setTimeout(() => searchBox.focus(), 200);
            showSuggestions('');
            };
            closeBtn.onclick = () => {
            const modal = overlay.querySelector('.search-modal');
            overlay.classList.remove('active');
            // Wait for animation to finish before hiding
            setTimeout(() => {
                overlay.style.display = 'none';
                searchBox.value = '';
                suggestionsList.innerHTML = '';
            }, 350);
            };
            overlay.onclick = (e) => {
            if (e.target === overlay) closeBtn.onclick();
            };

            function showSuggestions(query) {
            const filtered = suggestions.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            suggestionsList.innerHTML = filtered.map(item =>
                `<li>${item}</li>`
            ).join('');
            }

            searchBox.oninput = (e) => {
            showSuggestions(e.target.value);
            };

            suggestionsList.onclick = (e) => {
            if (e.target.tagName === 'LI') {
                searchBox.value = e.target.textContent;
                suggestionsList.innerHTML = '';
            }
            };
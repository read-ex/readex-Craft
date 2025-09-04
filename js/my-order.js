
    // Animate popup on show
    const popup = document.getElementById('delete-popup');
    const popupContent = popup.querySelector('.popup-content');
    function showPopup() {
        popup.style.display = 'flex';
        popupContent.style.animation = 'none';
        // Force reflow to restart animation
        void popupContent.offsetWidth;
        popupContent.style.animation = 'popup-in 0.32s cubic-bezier(.22,1.12,.62,1.01) forwards';
    }
    document.querySelectorAll('.cart-product img[src$="delete.svg"]').forEach(function(delBtn) {
        delBtn.style.cursor = "pointer";
        delBtn.onclick = function(e) {
            showPopup();
        };
    });
    document.getElementById('cancel-delete').onclick = function() {
        popup.style.display = 'none';
    };
    document.getElementById('confirm-delete').onclick = function() {
        popup.style.display = 'none';
        alert('Order deleted!');
    };
    popup.addEventListener('click', function(e) {
        if (e.target === this) {
            popup.style.display = 'none';
        }
    });
        // Show popup when delete icon is clicked
        document.querySelectorAll('.cart-product img[src$="delete.svg"]').forEach(function(delBtn) {
            delBtn.style.cursor = "pointer";
            delBtn.onclick = function(e) {
                document.getElementById('delete-popup').style.display = 'flex';
            };
        });
        // Hide popup on cancel
        document.getElementById('cancel-delete').onclick = function() {
            document.getElementById('delete-popup').style.display = 'none';
        };
        // Handle delete confirmation
        document.getElementById('confirm-delete').onclick = function() {
            // Add your delete logic here
            document.getElementById('delete-popup').style.display = 'none';
            alert('Order deleted!');
        };
        // Close popup when clicking outside the popup-content
        document.getElementById('delete-popup').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
        // Show popup when delete icon is clicked
        document.querySelectorAll('.cart-product img[src$="delete.svg"]').forEach(function(delBtn) {
            delBtn.style.cursor = "pointer";
            delBtn.onclick = function(e) {
                document.getElementById('delete-popup').style.display = 'flex';
            };
        });
        // Hide popup on cancel
        document.getElementById('cancel-delete').onclick = function() {
            document.getElementById('delete-popup').style.display = 'none';
        };
        // Handle delete confirmation
        document.getElementById('confirm-delete').onclick = function() {
            // Add your delete logic here
            document.getElementById('delete-popup').style.display = 'none';
            alert('Order deleted!');
        };